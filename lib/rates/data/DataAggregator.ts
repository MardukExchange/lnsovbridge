import Exchange from './Exchange';
import Kraken from './exchanges/Kraken';
import { getPairId } from '../../Utils';
import Binance from './exchanges/Binance';
import Bitfinex from './exchanges/Bitfinex';
import Poloniex from './exchanges/Poloniex';
import CoinbasePro from './exchanges/CoinbasePro';
import Coingecko from './exchanges/Coingecko';

class DataAggregator {
  private readonly exchanges: Exchange[] = [
    new Kraken(),
    new Binance(),
    new Bitfinex(),
    new Poloniex(),
    new CoinbasePro(),
    new Coingecko(),
  ];

  public readonly pairs = new Set<[string, string]>();

  public latestRates = new Map<string, number>();

  public registerPair = (baseAsset: string, quoteAsset: string): void => {
    this.pairs.add([baseAsset, quoteAsset]);
  }

  public fetchPairs = async (): Promise<Map<string, number>> => {
    const rateMap = new Map<string, number>();

    const queryPromises: Promise<void>[] = [];
    // console.log('dataaggregator.32');

    const queryRate = async (base: string, quote: string) => {
      // console.log('dataaggregator.35');
      const pairId = getPairId({ base, quote });
      // console.log('dataaggregator.37', pairId);
      const rate = await this.getRate(base, quote);

      if (rate && !isNaN(rate)) {
        rateMap.set(pairId, rate);
      } else {
        // If the rate couldn't be fetched, the latest one should be used
        rateMap.set(pairId, this.latestRates.get(pairId) || NaN);
      }
    };

    // console.log('dataaggregator.45 ', this.pairs);
    this.pairs.forEach(([baseAsset, quoteAsset]) => {
      queryPromises.push(queryRate(baseAsset, quoteAsset));
    });

    await Promise.all(queryPromises);

    this.latestRates = rateMap;
    return rateMap;
  }

  private getRate = async (baseAsset: string, quoteAsset: string) => {
    const promises: Promise<number>[] = [];

    // console.log('dataaggregator.58 ', baseAsset, quoteAsset);
    this.exchanges.forEach(exchange => promises.push(exchange.getPrice(baseAsset, quoteAsset)));

    const results = await Promise.all(promises.map(promise => promise.catch(error => error)));

    // Filter all results that are not numeric (failed requests)
    const validResults: number[] = results.filter(result => !isNaN(Number(result)));
    validResults.sort((a, b) => a - b);

    const middle = (validResults.length - 1) / 2;

    if (validResults.length % 2 === 0) {
      return (validResults[Math.ceil(middle)] + validResults[Math.floor(middle)]) / 2;
    } else {
      return validResults[middle];
    }
  }
}

export default DataAggregator;
