import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

import {ethers } from "hardhat";

import * as dotenv from "dotenv";

dotenv.config();

const deployFunction: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {deployments, getNamedAccounts} = hre as any;
    const {deploy} = deployments;


    const {deployer} = await getNamedAccounts();

    console.log('deployer', deployer);
    console.log("block number: ", await hre.ethers.provider.getBlockNumber());

    
    let tx;


      //define  fluid contract implementation
  await deploy('Fluid', {
    from: deployer,
    args: [],
    // log: true,
    autoMine: true, // speed up deployment on local network (ganache, hardhat), no effect on live networks
    deterministicDeployment: true,
  }).then((res: { address: any; newlyDeployed: any; }) => {
    console.log("Fluid implementation deployed to: %s, %s", res.address, res.newlyDeployed);
  });
  



};

export default deployFunction;
deployFunction.tags = ["fluid"];