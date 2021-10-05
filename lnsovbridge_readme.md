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