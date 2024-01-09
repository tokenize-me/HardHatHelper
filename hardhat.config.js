require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
let secret = require("./secret");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    bscTestnet: {
      url: 'https://data-seed-prebsc-2-s1.binance.org:8545/',
      accounts: [secret.key]
    },
    bscMainnet: {
      url: 'https://bsc-dataseed.binance.org',
      accounts: [secret.key]
    },
    polygonTestnet: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [secret.key]
    }
  },
  etherscan: {
    apiKey: secret.polygonAPI//secret.apiKey
  },
  solidity: {
    compilers: [
      {
        version: "0.8.14",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  }
};
