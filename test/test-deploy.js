const { ethers } = require("hardhat")
const { expect, assert } = require("chai")
// describe func, taking a name and anon func
describe("SimpleStorage", function () {
    let simpleStorageFactory
    let simpleStorage
    // let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })
    it("Should start with fav num of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        // assert or expect
        assert.equal(currentValue.toString(), expectedValue)
        // same as the assert
        // expect(currentValue.toString().to.equal(expectedValue))
    })

    it("Should update when we call store", async function () {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
    })
})
