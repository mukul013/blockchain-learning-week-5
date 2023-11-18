// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const candidateNames = ["CandidateA", "CandidateB"]; 
  const votingContract = await hre.ethers.getContractFactory("VotingSystem");
  const deployedVotingContract = await votingContract.deploy(candidateNames);

  console.log(`Contract Address Deployed: ${deployedVotingContract.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//Contract Address Deployed: 0x9C9d5C4661673c41C30F896e197C7B828967c5e1
//https://mumbai.polygonscan.com/address/0x9C9d5C4661673c41C30F896e197C7B828967c5e1#code
