import Errors from './Errors';
import { getPairId } from '../Utils';
import DataAggregator from './data/DataAggregator';

class RateCalculator {
  constructor(private aggregator: DataAggregator) {}

  public calculateRate = (base: string, quote: string): number => {
    const pair = getPairId({
      base,
      quote,
    });

    let rate = this.aggregator.latestRates.get(pair);
    if (rate === undefined) {
      // Try the reverse rate
      rate = this.aggregator.latestRates.get(getPairId({
        base: quote,
        quote: base,
      }));

      if (rate !== undefined) {
        rate = 1 / rate;
      } else {
        // TODO: also try routing via USD(T)
        // Get the route via BTC
        const baseBtc = this.aggregator.latestRates.get(getPairId({
          base,
          quote: 'BTC',
        }));

        // return rate=1 for RBTC prepayminerfee
        // return some value for SOV as its irrelevant
        if (base === 'RBTC' || base === 'SOV') {
          return 1;
        }
        console.log('ratecalc.36 base quote latestrates ', base, quote, this.aggregator.latestRates);
        if (baseBtc === undefined) {
          console.log('ratecalculator.34');
          throw Errors.COULD_NOT_FIND_RATE(pair);
        }

        const quoteBtc = this.aggregator.latestRates.get(getPairId({
          base: quote,
          quote: 'BTC',
        }));

        if (quoteBtc === undefined) {
          console.log('ratecalculator.44');
          throw Errors.COULD_NOT_FIND_RATE(pair);
        }

        return baseBtc / quoteBtc;
      }
    }

    return rate;
  }
}

export default RateCalculator;
