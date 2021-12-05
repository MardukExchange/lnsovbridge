# LN-SOV Bridge 

* LN-SOV Bridge aims to connect SOVRYN and RSK to Lightning Network.  
* It uses submarine-swaps to enable trustless swaps between RBTC on RSK and Bitcoin on Lightning Network. Swaps are non-custodial and the exchange is KYC-free.

Mainnet version is deployed at: https://marduk.exchange

## install
* Clone the repo, install requirements and compile  
`git clone https://github.com/pseudozach/lnsovbridge.git`  
`cd lnsovbridge && npm i && npm run compile`  
* Start btc & lnd  
`npm run docker:regtest`
* Start rsk  
`npm run rsk:geth`
* Fund a regtest account and deploy latest contracts  
* Copy boltz.conf to ~/.boltz/boltz.conf and modify as needed  
* Start the app  
`npm run start`

## use
* Visit `http://localhost:9001/getpairs` to see the API.
* Deploy [frontend](https://github.com/pseudozach/boltz-frontend) and visit `http:localhost:3000` to see the GUI.

## support
* For bugs/feature requests: Open an issue on this repo.  
* For support: Contact pseudozach#1633 and Kris#8171 on Sovryn Discord.

## acknowledgement
* This work is supported by a grant from [SOVRYN](https://sovryn.app).  
* LN-SOV Bridge is a fork of [Boltz](https://github.com/BoltzExchange/boltz-backend).

## documentation
* API documentation: [Read the Docs](https://docs.boltz.exchange/en/latest/)
