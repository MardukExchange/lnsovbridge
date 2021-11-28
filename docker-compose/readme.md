# Introduction
These are instructions for running lnsovbridge through docker-compose. 
The docker-compose consist of the following services:
- lnsovbridge backend API (running on port 9001)
- lnsovbridge frontend (running on port 3000)

You can build your own images, or use images built by us (default latetst version in docker-compose)

# Docker build
```
git clone https://github.com/pseudozach/lnsovbridge
cd lnsovbridge
docker buildx build --platform linux/amd64 -t your_tag_name .


git clone https://github.com/pseudozach/boltz-frontend
cd boltz-frontend
docker buildx build --platform linux/amd64 -t your_tag_name .
```
# Configuration

Each services needs it own configuration file to be mounted inside docker container at startup. 
You should edit configuration files with your own values.

## Lnsovbridge backend API 
Open and edit the `boltz.docker.conf` with your values
### LND
- lnd endpoint
- macaroonpath 
- certpath
### BTC
- bitcoin node endpoint
- cookie
- rpcuser
- rpcpass
### RSK
- rsk node endpoint, if you cannot host your own node, you can get API access here: https://getblock.io/
#### Onchain data
We need to provide infomration about smart contracts that service will be interacting with
##### Swap contracts
These contracts should be deployed for every deployment of this service and should not be shared with other deployments
- RBTC swapp contract address (etherswap.js)
- erc20 token swap contract address (erc20swap.js)
##### SOV token contract address
Currently alongside RBTC and Lightning we support swapping of SOV tokens. We need to provide deployment of the SOV token of the chain we are deploying to:
- contractAddress

# Lnsovbridge frontend
Open and edit `.lnsovbridge-fe.env` with your values
Contracts you deployed in step above for the backend will also be needed in here
