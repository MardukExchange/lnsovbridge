var erc20swapContract = web3.eth.contract([
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "preimageHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "preimage",
          "type": "bytes32"
        }
      ],
      "name": "Claim",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "preimageHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "claimAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "refundAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timelock",
          "type": "uint256"
        }
      ],
      "name": "Lockup",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "preimageHash",
          "type": "bytes32"
        }
      ],
      "name": "Refund",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "preimage",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "refundAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timelock",
          "type": "uint256"
        }
      ],
      "name": "claim",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "preimageHash",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "claimAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "refundAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timelock",
          "type": "uint256"
        }
      ],
      "name": "hashValues",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "preimageHash",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "claimAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timelock",
          "type": "uint256"
        }
      ],
      "name": "lock",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "preimageHash",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "claimAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timelock",
          "type": "uint256"
        }
      ],
      "name": "lockPrepayMinerfee",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "preimageHash",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "claimAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timelock",
          "type": "uint256"
        }
      ],
      "name": "refund",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "swaps",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "version",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]);
  var erc20swap = erc20swapContract.new({
    from: web3.eth.accounts[1],
    data: '0x608060405234801561001057600080fd5b50610bfd806100206000396000f3fe6080604052600436106100705760003560e01c806391644b2b1161004e57806391644b2b14610158578063b8080ab814610178578063cd413efa1461018b578063eb84e7f2146101ab57610070565b8063365047211461007557806354fd4d50146100975780637beb9d6d146100c3575b600080fd5b34801561008157600080fd5b50610095610090366004610ac2565b6101eb565b005b3480156100a357600080fd5b506100ac600281565b60405160ff90911681526020015b60405180910390f35b3480156100cf57600080fd5b5061014a6100de366004610b13565b60408051602081018890529081018690526bffffffffffffffffffffffff19606086811b82168184015285811b8216607484015284901b166088820152609c810182905260009060bc016040516020818303038152906040528051906020012090509695505050505050565b6040519081526020016100ba565b34801561016457600080fd5b50610095610173366004610ac2565b61031c565b610095610186366004610ac2565b6104e3565b34801561019757600080fd5b506100956101a6366004610ac2565b610501565b3480156101b757600080fd5b506101db6101c6366004610a92565b60006020819052908152604090205460ff1681565b60405190151581526020016100ba565b438111156102665760405162461bcd60e51b815260206004820152602560248201527f4552433230537761703a207377617020686173206e6f742074696d6564206f7560448201527f742079657400000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6040805160208082018890528183018790526bffffffffffffffffffffffff19606087811b82168185015286811b8216607485015233901b166088830152609c8083018590528351808403909101815260bc90920190925280519101206102cc81610639565b600081815260208190526040808220805460ff191690555187917f3fbd469ec3a5ce074f975f76ce27e727ba21c99176917b97ae2e713695582a1291a26103148433876106c5565b505050505050565b600084116103925760405162461bcd60e51b815260206004820152602960248201527f4552433230537761703a206c6f636b656420616d6f756e74206d757374206e6f60448201527f74206265207a65726f0000000000000000000000000000000000000000000000606482015260840161025d565b61039e8333308761082d565b6040805160208082018890528183018790526bffffffffffffffffffffffff19606087811b82168185015286811b8216607485015233901b166088830152609c8083018590528351808403909101815260bc909201909252805191012060009060008181526020819052604090205490915060ff16156104605760405162461bcd60e51b815260206004820152601e60248201527f4552433230537761703a20737761702065786973747320616c72656164790000604482015260640161025d565b60008181526020819052604090819020805460ff1916600117905551339087907fa98eaa2bd8230d87a1a4c356f5c1d41cb85ff88131122ec8b1931cb9d31ae145906104d39089908990899089909384526001600160a01b03928316602085015291166040830152606082015260800190565b60405180910390a3505050505050565b6104f0858585858561031c565b6104fa823461099d565b5050505050565b600060028660405160200161051891815260200190565b60408051601f198184030181529082905261053291610b79565b602060405180830381855afa15801561054f573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906105729190610aaa565b6040805160208082018490528183018990526bffffffffffffffffffffffff19606089811b82168185015233811b8216607485015288901b166088830152609c8083018790528351808403909101815260bc90920190925280519101209091506105db81610639565b60008181526020818152604091829020805460ff19169055905188815283917f5664142af3dcfc3dc3de45a43f75c746bd1d8c11170a5037fdf98bdb35775137910160405180910390a26106308533886106c5565b50505050505050565b60008181526020819052604090205460ff1615156001146106c25760405162461bcd60e51b815260206004820152603460248201527f4552433230537761703a207377617020686173206e6f20746f6b656e73206c6f60448201527f636b656420696e2074686520636f6e7472616374000000000000000000000000606482015260840161025d565b50565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052915160009283929087169161074f9190610b79565b6000604051808303816000865af19150503d806000811461078c576040519150601f19603f3d011682016040523d82523d6000602084013e610791565b606091505b50915091508180156107bb5750805115806107bb5750808060200190518101906107bb9190610a6b565b6104fa5760405162461bcd60e51b815260206004820152602f60248201527f5472616e7366657248656c7065723a20636f756c64206e6f74207472616e736660448201527f657220455243323020746f6b656e730000000000000000000000000000000000606482015260840161025d565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905291516000928392908816916108bf9190610b79565b6000604051808303816000865af19150503d80600081146108fc576040519150601f19603f3d011682016040523d82523d6000602084013e610901565b606091505b509150915081801561092b57508051158061092b57508080602001905181019061092b9190610a6b565b6103145760405162461bcd60e51b815260206004820152603360248201527f5472616e7366657248656c7065723a20636f756c64206e6f74207472616e736660448201527f657246726f6d20455243323020746f6b656e7300000000000000000000000000606482015260840161025d565b6000826001600160a01b03168260405160006040518083038185875af1925050503d80600081146109ea576040519150601f19603f3d011682016040523d82523d6000602084013e6109ef565b606091505b5050905080610a665760405162461bcd60e51b815260206004820152602860248201527f5472616e7366657248656c7065723a20636f756c64206e6f74207472616e736660448201527f6572204574686572000000000000000000000000000000000000000000000000606482015260840161025d565b505050565b600060208284031215610a7c578081fd5b81518015158114610a8b578182fd5b9392505050565b600060208284031215610aa3578081fd5b5035919050565b600060208284031215610abb578081fd5b5051919050565b600080600080600060a08688031215610ad9578081fd5b85359450602086013593506040860135610af281610bb2565b92506060860135610b0281610bb2565b949793965091946080013592915050565b60008060008060008060c08789031215610b2b578081fd5b86359550602087013594506040870135610b4481610bb2565b93506060870135610b5481610bb2565b92506080870135610b6481610bb2565b8092505060a087013590509295509295509295565b60008251815b81811015610b995760208186018101518583015201610b7f565b81811115610ba75782828501525b509190910192915050565b6001600160a01b03811681146106c257600080fdfea2646970667358221220478b2b4a0ad3bd8a1d5bd8670a8dbf1834e857dfdebc6e3b73324987677475ee64736f6c63430008020033', 
    gas: '4700000'
  }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('erc20swap Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
  })