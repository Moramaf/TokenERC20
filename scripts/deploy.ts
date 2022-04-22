
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
//import { config } from "dotenv";
import { ethers } from "hardhat";
import { tokenName, tokenSymbol, initialSupply, decimals } from "../config";


async function main() {

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy(tokenName, tokenSymbol, ethers.utils.parseUnits(`${initialSupply}`, decimals), decimals);


  await token.deployed();

  console.log("Token deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
