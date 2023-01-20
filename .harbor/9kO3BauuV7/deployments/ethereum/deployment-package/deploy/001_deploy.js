const { ethers } = require("hardhat");

module.exports = async (hre) => {
  console.log("IS THIS WORKING?");
  const { getNamedAccounts, deployments, getChainId, getUnnamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const bankResp = await deploy("SecretNumber", {
    from: deployer,
    gasLimit: 500000,
  });
};
