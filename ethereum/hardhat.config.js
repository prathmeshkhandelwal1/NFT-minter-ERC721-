/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/A97EufakpeJeQBIryUzA5J-GqsX-mYBo",
      accounts: [
        `0xd32633034e1056603a9f889827c83608fa6048f3268c59a743d4b700715093ba`,
      ],
    },
  },
};
