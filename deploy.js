const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const {abi, evm} = require('./compile')
//0x4A3dBE50ce7E0A012eF269311429566F5e2664D1
const provider = new HDWalletProvider(
    //the 12 word phrase
    process.env.MNEUMONIC_PHRASE,
    //the infure rinkeby test network endpoint
    process.env.PROVIDER_ADDRESS

)

const web3 = new Web3(provider);

const deploy = async () => {

    const accounts = await web3.eth.getAccounts()
    const result = await new web3.eth.Contract(abi)
        .deploy({ data: evm.bytecode.object, arguments: ['Hello Thiago!'] })
        .send({ from: accounts[0], gas: '1000000' })
    console.log('Contract deployed to ' + result.options.address)
    provider.engine.stop()
}

deploy()