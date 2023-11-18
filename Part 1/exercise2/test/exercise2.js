const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Exercise_2", function () {
  let exercise;
  let owner;
  let user;

  beforeEach(async function () {
    const Exercise_2 = await ethers.getContractFactory("Exercise_2");
    exercise = await Exercise_2.deploy();

    [owner, user] = await ethers.getSigners();
  });

  it("should exploit vulnerability", async function () {
    const initialBalance = await ethers.provider.getBalance(user.address);
    console.log("User Intial Balance",(ethers.formatUnits(initialBalance)))

    await exercise.connect(user).deposit(user.address, ethers.parseEther("10"),{value:ethers.parseEther("10")}); 
    const balance = await exercise.connect(user).balances(user.address)
    console.log("User's Deposited Amount",ethers.formatUnits(balance) )
    
    const finalBalance = await ethers.provider.getBalance(user.address);
    console.log("Users Balance After Deposit",ethers.formatUnits(finalBalance))

    const contractBalance = await ethers.provider.getBalance(exercise);
    console.log("Contract Balance After Deposit",ethers.formatUnits(contractBalance))

    await exercise.connect(user).withdraw(user.address, ethers.parseEther("10"));
    const balanceOfUserAfterWithdraw = await ethers.provider.getBalance(user.address);
    console.log("balanceOfUserAfterWithdraw", ethers.formatUnits(balanceOfUserAfterWithdraw))
    const contractBalanceAfterWithdraw = await ethers.provider.getBalance(exercise);
    console.log("contractBalanceAfterWithdraw",ethers.formatUnits(contractBalanceAfterWithdraw))

  });

});
