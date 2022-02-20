const hre = require("hardhat");

const main = async () => {
  const transacitonFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );
  const transacitonContract = await transacitonFactory.deploy();

  await transacitonContract.deployed();

  console.log("Transaction.sol deployed to : ", transacitonContract.address);
};

(async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();

// 0x020349da40d59740D94655F62183A46E4a9091A6
