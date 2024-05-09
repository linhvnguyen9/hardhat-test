const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("MyTokenModule", (m) => {
  const token = m.contract("MyToken", ["10000000"]);

  return { token };
});