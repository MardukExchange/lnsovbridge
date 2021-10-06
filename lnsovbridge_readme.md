```
### INSTALL DEPENDENCIES
sudo apt install rsync

### GETTING JAVA
cd /workspace
wget https://github.com/rsksmart/rskj/releases/download/IRIS-3.0.1/rskj-core-3.0.1-IRIS-all.jar
yarn rsk:geth

### STARTING BITCOIN in REGTEST
yarn docker:regtest 
OR
docker container start regtest

### INSTALL GETH AND ETH TOOLS
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum

### DEPLOY SMART CONTRACTS
geth attach http://127.0.0.1:4444/
    web3.eth.defaultAccount = eth.accounts[0]
    loadScript("/workspace/lnsovbridge/erc20swap.js")
    loadScript("/workspace/lnsovbridge/etherswap.js")

### FUNDING ACCOUNTS
docker:geth:fund
rsk:fund


### COPY BOLZZ CONFIG TO HOME_DIR
mkdir ~/.boltz
cp boltz.gitpod.conf ~/.boltz/boltz.conf

### RU
npm run dev

### FRONTEND
git clone https://github.com/pseudozach/boltz-frontend.git  
cd boltz-frontend && npm i  
* update .env file as needed  
npm run start  

GUI should be running on http://localhost:3000  
Backend API should be running on http://localhost:9001  
API Docs: https://docs.boltz.exchange/en/latest/
```


### REGTEST INFO
https://docs.boltz.exchange/en/latest/regtest/


IF ALL GOES WELL:
    web3.eth.defaultAccount = eth.accounts[0]
    loadScript("/workspace/lnsovbridge/erc20swap.js")
    loadScript("/workspace/lnsovbridge/etherswap.js")

    run `npm run dev` if it fails for first time because some service not running

alias lnclibtc2='lncli --rpcserver=127.0.0.1:10011 --tlscertpath=/root/.lnd-btc/tls.cert --macaroonpath=/root/.lnd-btc/data/chain/bitcoin/regtest/admin.macaroon'

eth.sendTransaction({from:eth.accounts[1], to:'0x49c55e86990557a7907DC9d23636b18EF8De2C0f', value: web3.toWei(10, "ether"), gas:21000});
 
 lnclibtc2 listchannels | jq -r '.channels[].local_balance' | awk '{sum+=$1} END {print sum}'
 
 lnclibtc2 addinvoice 100000