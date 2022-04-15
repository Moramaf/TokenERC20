import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

let CONTRACTADDRESS = "0x429a4287C1fFB9F946e974Ab09245aC4290896e0";

task("approve", "approve the allowance to transfer token")
.addOptionalParam("addressTo", "address to allow transfer token")
.addOptionalParam("value", "amount of token to transfer")
.setAction(async (taskArgs, hre) => {
    const Token = (await hre.ethers.getContractFactory("Token"));
    const token = await Token.attach(CONTRACTADDRESS);
    const tx = token.approve(taskArgs.addressTo, taskArgs.value);
    await tx.wait();
    console.log(`${taskArgs.value} approved to transfer ${taskArgs.addressTo}`);
});

task("transfer", "transfer your tokens to address")
.addOptionalParam("addressTo", "transfer token to address")
.addOptionalParam("amount", "amount of token to transfer")
.setAction(async (taskArgs, hre) => {
    const Token = (await hre.ethers.getContractFactory("Token"));
    const token = await Token.attach(CONTRACTADDRESS);
    const tx = token.transfer(taskArgs.addressTo, taskArgs.amount);
    await tx.wait();
    console.log(`${taskArgs.amount} transfered to ${taskArgs.addressTo}`);
});

task("transferFrom", "transfer allowed tokens form address to address")
.addOptionalParam("addressFrom", "transfer allowed tokens from address")
.addOptionalParam("addressTo", "transfer token to address")
.addOptionalParam("amount", "amount of token to transfer")
.setAction(async (taskArgs, hre) => {
    const Token = (await hre.ethers.getContractFactory("Token"));
    const token = await Token.attach(CONTRACTADDRESS);
    const tx = token.transferFrom(taskArgs.addressFrom, taskArgs.addressTo, taskArgs.amount);
    await tx.wait();
    console.log(`${taskArgs.amount} transfered from ${taskArgs.addressFrom} to ${taskArgs.addressTo}`);
});