//https://eth-goerli.g.alchemy.com/v2/N_5kmatzZtAncRuPuuHea4isedtSi1xq

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/N_5kmatzZtAncRuPuuHea4isedtSi1xq',
      accounts: [ '6414e3616baf95f33d64c6f75a653f999817ea1c3af8aa494dfaac0adc45dd99' ]
    }
  }
}