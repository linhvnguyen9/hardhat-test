const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const MyToken = require("../ignition/modules/MyToken");

describe("MyToken", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployMyTokenFixture() {
        const [owner, otherAccount] = await ethers.getSigners();
        const preMint = "100000"

        const MyToken = await ethers.getContractFactory("MyToken");
        const myToken = await MyToken.deploy(preMint);

        return { myToken, preMint, owner, otherAccount };
    }

    describe("Deployment", function () {
        it("Should premint token to the contract deployer", async function () {
            const { myToken, preMint, owner } = await loadFixture(deployMyTokenFixture);

            expect(await myToken.balanceOf(owner)).to.equal(preMint);
        });
    });
});



