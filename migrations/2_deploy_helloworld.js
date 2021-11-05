const HelloWorld = artifacts.require("HelloWorld");

module.exports = async function (deployer, network, accounts) {
	await deployer.deploy(HelloWorld, {from: accounts[0]});
};
