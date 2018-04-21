require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require("truffle-hdwallet-provider");

const infura_apikey = "ivB6T2P1Mml7lhZHpYRb";
const mnemonic = "what move balcony oyster become model behind inch ship fever diagram grain";

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
            gas: 4300000,
        },
        main: {
            network_id: 1,
            provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
            gas: 3700000,
        },
        ropsten: {
            network_id: 3,
            provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
            gas: 4300000,
        },
        rinkeby: {
            network_id: 4,
            provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/"+infura_apikey),
            gas: 4300000,
        }
    },
    mocha: {
        reporter: 'eth-gas-reporter',
        reporterOptions: {
            currency: 'KRW'
        }
    }
};
