const { ethers } = require('hardhat');
require('dotenv').config();

async function main() {

    const contractAddress = '0x9C9d5C4661673c41C30F896e197C7B828967c5e1';
    const privateKey = process.env.PRIVATE_KEY;
    const provider = ethers.provider;
    
    const contract = await ethers.getContractAt('VotingSystem', contractAddress);


  const owner = await contract.owner();
  console.log('Owner:', owner);

  const wallet = new ethers.Wallet(privateKey, provider);
  const voterAddress = wallet.address;

  const hasVoted = await contract.hasVoted(voterAddress);
  console.log(`${voterAddress} has already voted: ${hasVoted}`);

  if (!hasVoted) {
    const candidateIndexToVoteFor = 0;

    const voteTransaction = await contract.vote(candidateIndexToVoteFor);
    await voteTransaction.wait();

    console.log(`Vote successful! ${voterAddress} voted for candidate ${candidateIndexToVoteFor}`);
  } else {
    console.log(`${voterAddress} has already voted`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
