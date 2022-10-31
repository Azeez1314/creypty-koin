// https://eth-goerli.g.alchemy.com/v2/dXIP7Xqe3Tv4-n5IyQnWFd67UlYQiqiz

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/dXIP7Xqe3Tv4-n5IyQnWFd67UlYQiqiz',
      accounts: ['a36ad46949c862b0ce831f99deeb36b7aabb454b1fe723698900009d54687aee'],
    }
  }
}