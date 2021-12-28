import Exchange, { makeRequest } from '../Exchange';

class Sovryn implements Exchange {
  // https://backend.sovryn.app/datafeed/price/RBTC:XUSD?startTime=1640234835000&endTime=1640670495000
  private static readonly API = 'https://backend.sovryn.app/datafeed/price';

  public async getPrice(baseAsset: string, quoteAsset: string): Promise<number> {
    // BTC XUSD
    const startTime = this.getRoundDownTime(10);
    const response = await makeRequest(`${Sovryn.API}/${baseAsset}:${quoteAsset}?startTime=${startTime}`);
    // console.log("sovryn response: ", response);
    const lastprice = response.series[0].close;
    // console.log("sovryn lastprice: ", lastprice);
    // return Number(1/lastprice);
    return Number(lastprice);
  }

  private getRoundDownTime = (minutes, d=new Date()) => {
    let ms = 1000 * 60 * minutes; // convert minutes to ms
    let roundedDate = new Date(Math.floor(d.getTime() / ms) * ms);
    return roundedDate.getTime()
  }
}

export default Sovryn;
