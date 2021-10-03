var etherswapContract = web3.eth.contract([{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"preimageHash","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"preimage","type":"bytes32"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"preimageHash","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"claimAddress","type":"address"},{"indexed":true,"internalType":"address","name":"refundAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"timelock","type":"uint256"}],"name":"Lockup","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"preimageHash","type":"bytes32"}],"name":"Refund","type":"event"},{"inputs":[{"internalType":"bytes32","name":"preimage","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"refundAddress","type":"address"},{"internalType":"uint256","name":"timelock","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"preimageHash","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"claimAddress","type":"address"},{"internalType":"address","name":"refundAddress","type":"address"},{"internalType":"uint256","name":"timelock","type":"uint256"}],"name":"hashValues","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"preimageHash","type":"bytes32"},{"internalType":"address","name":"claimAddress","type":"address"},{"internalType":"uint256","name":"timelock","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"preimageHash","type":"bytes32"},{"internalType":"address payable","name":"claimAddress","type":"address"},{"internalType":"uint256","name":"timelock","type":"uint256"},{"internalType":"uint256","name":"prepayAmount","type":"uint256"}],"name":"lockPrepayMinerfee","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"preimageHash","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"claimAddress","type":"address"},{"internalType":"uint256","name":"timelock","type":"uint256"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"swaps","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}]);
var etherswap = etherswapContract.new({
    from: web3.eth.accounts[10],
    data: '0x60806040523480156100115760006000fd5b50610017565b610b67806100266000396000f3fe6080604052600436106100745760003560e01c80636fa4ae601161004e5780636fa4ae601461017b5780638b2f8f82146101e2578063c3c37fbc1461028f578063eb84e7f21461030457610074565b80630899146b1461007a57806335cd4ccb146100d757806354fd4d501461014c57610074565b60006000fd5b6100d5600480360360608110156100915760006000fd5b810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061035b565b005b3480156100e45760006000fd5b5061014a600480360360808110156100fc5760006000fd5b81019080803560001916906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610373565b005b3480156101595760006000fd5b5061016261046b565b604051808260ff16815260200191505060405180910390f35b6101e0600480360360808110156101925760006000fd5b810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050610470565b005b3480156101ef5760006000fd5b50610275600480360360a08110156102075760006000fd5b81019080803560001916906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104f5565b604051808260001916815260200191505060405180910390f35b34801561029c5760006000fd5b50610302600480360360808110156102b45760006000fd5b81019080803560001916906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610584565b005b3480156103115760006000fd5b50610343600480360360208110156103295760006000fd5b8101908080356000191690602001909291905050506106fb565b60405180821515815260200191505060405180910390f35b61036d8334848461072063ffffffff16565b5b505050565b4381111515156103ce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610a4c6025913960400191505060405180910390fd5b60006103e385858533866104f563ffffffff16565b90506103f4816108f463ffffffff16565b60006000506000826000191660001916815260200190815260200160002060006101000a81549060ff021916905584600019167f3fbd469ec3a5ce074f975f76ce27e727ba21c99176917b97ae2e713695582a1260405160405180910390a2610463338561098263ffffffff16565b505b50505050565b600281565b80341115156104ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d815260200180610ac2603d913960400191505060405180910390fd5b6104de84823403858561072063ffffffff16565b6104ee838261098263ffffffff16565b5b50505050565b6000858585858560405160200180866000191681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1660601b81526014018373ffffffffffffffffffffffffffffffffffffffff1660601b81526014018281526020019550505050505060405160208183030381529060405280519060200120905061057b565b95945050505050565b600060028560405160200180826000191681526020019150506040516020818303038152906040526040518082805190602001908083835b6020831015156105e257805182525b6020820191506020810190506020830392506105bc565b6001836020036101000a038019825116818451168082178552505050505050905001915050602060405180830381855afa158015610625573d600060003e3d6000fd5b5050506040513d602081101561063b5760006000fd5b81019080805190602001909291905050509050600061066382863387876104f563ffffffff16565b9050610674816108f463ffffffff16565b60006000506000826000191660001916815260200190815260200160002060006101000a81549060ff021916905581600019167f5664142af3dcfc3dc3de45a43f75c746bd1d8c11170a5037fdf98bdb3577513787604051808260001916815260200191505060405180910390a26106f2338661098263ffffffff16565b50505b50505050565b600060005060205280600052604060002060009150909054906101000a900460ff1681565b60008311151561077b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180610a996029913960400191505060405180910390fd5b600061079085858533866104f563ffffffff16565b90506000151560006000506000836000191660001916815260200190815260200160002060009054906101000a900460ff16151514151561083c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4574686572537761703a20737761702065786973747320616c7265616479000081526020015060200191505060405180910390fd5b600160006000506000836000191660001916815260200190815260200160002060006101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff1685600019167f15b4b8206809535e547317cd5cedc86cff6e7d203551f93701786ddaf14fd9f9868686604051808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a3505b50505050565b6001151560006000506000836000191660001916815260200190815260200160002060009054906101000a900460ff16151514151561097e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180610aff6033913960400191505060405180910390fd5b5b50565b60008273ffffffffffffffffffffffffffffffffffffffff1682604051808050600001905060006040518083038185875af1925050503d80600081146109e4576040519150601f19603f3d011682016040523d82523d6000602084013e6109e9565b606091505b50509050801515610a45576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180610a716028913960400191505060405180910390fd5b505b505056fe4574686572537761703a207377617020686173206e6f742074696d6564206f7574207965745472616e7366657248656c7065723a20636f756c64206e6f74207472616e736665722045746865724574686572537761703a206c6f636b656420616d6f756e74206d757374206e6f74206265207a65726f4574686572537761703a2073656e7420616d6f756e74206d7573742062652067726561746572207468616e207468652070726570617920616d6f756e744574686572537761703a207377617020686173206e6f204574686572206c6f636b656420696e2074686520636f6e7472616374a264697066735822122054c4e1e0c18b72e46aa1117f9c1b0115ce3cb664bbd953dad5220c27e5ff9ad164736f6c63430007060033', 
    gas: '4700000'
}, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('etherswap Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
})