import { BigNumber, providers } from 'ethers';
// import GasNow from './GasNow';
import { gweiDecimals } from '../../consts/Consts';
import { getBiggerBigNumber, getHexBuffer } from '../../Utils';

/**
 * Removes the 0x prefix of the Ethereum bytes
 */
export const parseBuffer = (input: string): Buffer => {
  return getHexBuffer(input.slice(2));
};

/**
 * Formats the gas provided price or queries an estimation from the web3 provider
 *
 * @param provider web3 provider
 * @param gasPrice denominated in GWEI
 */
export const getGasPrice = async (provider: providers.Provider, gasPrice?: number): Promise<BigNumber> => {
  if (gasPrice !== undefined) {
    console.log("rsk ethereumutils.21 gasprice undefined so returning ", BigNumber.from(gasPrice).mul(gweiDecimals));
    return BigNumber.from(gasPrice).mul(gweiDecimals);
  }

  // replacing gasnow with minumum 123 gas manually which is used in metamask
  // GasNow.latestGasPrice
  return getBiggerBigNumber(await provider.getGasPrice(), BigNumber.from(123).mul(gweiDecimals));
};
