const { scripts, ConfigVariablesInitializer } = require("zos");
const { add, push, create } = scripts;
const { sleep } = require("../utils_deployment")

require("openzeppelin-test-helpers/configure")({ web3 });

//const ERC777Sender = artifacts.require(`./ERC777TokensSender.sol`);
const IERC777Compatible = artifacts.require("./IERC777Compatible");

async function deploy(options, tokenOwner) {
  //Register Contract in the zos project
  add({
    contractsData: [{ name: "AssetToken", alias: "AssetToken" }],
  });

  //push it to the network
  await push(options);

  //create an upgradable instance of it (proxy) and initialize the logic
  await create(
    Object.assign(
      {
        contractAlias: "AssetToken",
        methodName: "initialize",
        methodArgs: ["CLR", "Asset Token", tokenOwner, [], 0, 1]
      },
      options
    )
  );
}

module.exports = (deployer, networkName, accounts) => {
  deployer.then(async () => {
    deployer.deploy(IERC777Compatible);
    const {
      network,
      txParams
    } = await ConfigVariablesInitializer.initNetworkConfiguration({
      network: networkName
    });
    await deploy({ network, txParams, deployDependencies:true}, accounts[0]);
  });
};
