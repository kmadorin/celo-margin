const SolarisMargin = artifacts.require("SolarisMargin");
const {getMoolaV2LendingPoolAddressProvider, getMoolaV2ProtocolDataProvider, getUbeswapRouterAddress} = require("../constants");

module.exports = async function (deployer, network, accounts) {
	const moolaV2LendingPoolAddressProvider = getMoolaV2LendingPoolAddressProvider(network);
	const mooldaV2ProtocolDataProvider = getMoolaV2ProtocolDataProvider(network);
	const ubeswapRouterAddress = getUbeswapRouterAddress('alfajores');
	await deployer.deploy(SolarisMargin, moolaV2LendingPoolAddressProvider, mooldaV2ProtocolDataProvider, ubeswapRouterAddress, {from: accounts[0]});
};
