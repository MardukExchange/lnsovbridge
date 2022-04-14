web3.eth.defaultAccount = eth.accounts[0];
loadScript("/workspace/lnsovbridge/etherswap.js");
loadScript("/workspace/lnsovbridge/erc20swap.js");
loadScript("/workspace/lnsovbridge/erc20token.js");
loadScript("/workspace/lnsovbridge/erc20token.js");
web3.eth.sendTransaction({from:eth.accounts[1], to:'0x946b238f8Ead0170686b32b23070fF4BFB006D3B', value: web3.toWei(10, "ether"), gas:21000});
web3.eth.sendTransaction({from:eth.accounts[1], to:'0xeCb6b2a431826634E36d2787016670EBd8AF5A9B', value: web3.toWei(10, "ether"), gas:21000});

setTimeout(function() {
    console.log('transferring erc20 tokens')
    web3.eth.defaultAccount = eth.accounts[1]
    erc20token.transfer('0x946b238f8Ead0170686b32b23070fF4BFB006D3B', web3.toWei(1000, "ether"));
    erc20token.transfer('0xeCb6b2a431826634E36d2787016670EBd8AF5A9B', web3.toWei(1000, "ether"));
}, 5000);