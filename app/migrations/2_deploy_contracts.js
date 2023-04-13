var Migrations = artifacts.require("./Agent.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
