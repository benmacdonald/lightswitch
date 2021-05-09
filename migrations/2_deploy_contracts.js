const Arbitrage = artifacts.require("Arbitrage.sol");

module.exports = function (deployer) {
  deployer.deploy(
    Arbitrage,
    "0xBCfCcbde45cE874adCB698cC183deBcF17952812", //PancakeSwap factory
    "TODO" //BakerySwap router
  );
};
