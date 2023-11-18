const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Exercise_1", function () {
  let exercise;
  let user;

  beforeEach(async function () {
    const Exercise_1 = await ethers.getContractFactory("Exercise_1");
    exercise = await Exercise_1.deploy();

    [, user] = await ethers.getSigners();
  });

  it("should exploit withdrawal vulnerability", async function () {

    await exercise.connect(user).deposit(user.address, 10);
    await expect(exercise.connect(user).withdraw(user.address, 20)).to.be.revertedWith("Insufficient balance");
  });

});
