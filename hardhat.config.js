require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv")
dotenv.config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    SepoliaETH: {
      url:process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }

};
