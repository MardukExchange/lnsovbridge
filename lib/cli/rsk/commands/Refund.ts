import { Arguments } from 'yargs';
import { BigNumber, ContractTransaction } from 'ethers';
import { getHexBuffer } from '../../../Utils';
// import { etherDecimals } from '../../../consts/Consts';
import BuilderComponents from '../../BuilderComponents';
import { connectEthereum, getContracts } from '../EthereumUtils';
// import { queryERC20SwapValues, queryEtherSwapValues } from '../../../wallet/rsk/ContractUtils';

export const command = 'refund <preimageHash> [token]';

export const describe = 'refunds Rbtc or a ERC20 token from the corresponding swap contract';

export const builder = {
  preimageHash: {
    describe: 'preimage hash with which the funds have been locked',
    type: 'string',
  },
  token: BuilderComponents.token,
};

export const handler = async (argv: Arguments<any>): Promise<void> => {
  const signer = connectEthereum(argv.provider, argv.signer);
  const { etherSwap, erc20Swap } = getContracts(signer);
  console.log('signer, etherSwap ', signer, etherSwap.address);

  const preimageHash = getHexBuffer(argv.preimageHash);
  let allargs = process.argv.slice(2);
  let rbtcamount:any = allargs[2];
  const amount = BigNumber.from(rbtcamount*10**18);
  // const amount = allargs[2];
  const claimAddress = allargs[3];
  const timelock = allargs[4];
  console.log('preimageHash: ', preimageHash, amount, claimAddress, timelock);

  let transaction: ContractTransaction;

  if (argv.token) {
    // const erc20SwapValues = await queryERC20SwapValues(erc20Swap, preimageHash);
    const tokenAddress = allargs[5];
    transaction = await erc20Swap.refund(
      preimageHash,
      amount,
      tokenAddress,
      claimAddress,
      timelock,
      // erc20SwapValues.amount,
      // erc20SwapValues.tokenAddress,
      // erc20SwapValues.claimAddress,
      // erc20SwapValues.timelock,
    );
    console.log('erc20Swap refund tx: ', transaction);
  } else {
    // const etherSwapValues = await queryEtherSwapValues(etherSwap, preimageHash);
    // console.log('etherSwapValues ', etherSwapValues);
    transaction = await etherSwap.refund(
      preimageHash,
      amount,
      claimAddress,
      timelock,
      // etherSwapValues.amount,
      // etherSwapValues.claimAddress,
      // etherSwapValues.timelock,
    );
    console.log('rbtcswap refund tx: ', transaction);
  }

  await transaction.wait(1);

  console.log(`Refunded ${argv.token ? 'ERC20 token' : 'Rbtc'} in: ${transaction.hash}`);
};
