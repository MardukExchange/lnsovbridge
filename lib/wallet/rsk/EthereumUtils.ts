import { BigNumber, providers } from 'ethers';
import GasNow from './GasNow';
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
    console.log("rsk ethereumutils.21 gasprice: ", BigNumber.from(gasPrice).mul(gweiDecimals));
    return BigNumber.from(gasPrice).mul(gweiDecimals);
  }

  // for rsk mainnet tx uses 0.000000000065164 gas which is returned as {"jsonrpc":"2.0","id":73,"result":"0x3e252e0"} = 65164000
  // from {"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":73}
  // on mainnet this already returns 65164000 so not changing it
  console.log('rsk/utils.26 getGasPrice getBiggerBigNumber: ', await provider.getGasPrice(), GasNow.latestGasPrice, BigNumber.from(65164000))
  // GasNow.latestGasPrice, -> doesn't exist and doesn't make sense for rsk anyway
  return getBiggerBigNumber(await provider.getGasPrice(), BigNumber.from(65164000));
};
