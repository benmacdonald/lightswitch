const Arbitrage = artifacts.require("Arbitrage.sol");

module.exports = function (deployer) {
  deployer.deploy(
    Arbitrage,
    "0xBCfCcbde45cE874adCB698cC183deBcF17952812", //PancakeSwap factory
    "0xcde540d7eafe93ac5fe6233bee57e1270d3e330f" //BakerySwap router
  );
};
