const rewiremock = require('rewiremock/node')
const { deepStrictEqual } = require('assert')
const UserFactory = require("../src/factory/userFactory");

//mockDatabase could be in another file
const dbData = [{name: 'MockUserName1'}, {name: 'MockUserName2'}]
class MockDatabase {
    connect = () => this
    find = async(query) => dbData
}

rewiremock(() => require('../src/fake-database')).with(MockDatabase)

;(async () => {
    {
        const expected = [{name: 'MOCKUSERNAME1'}, {name: 'MOCKUSERNAME2'}]
        rewiremock.enable()
        const UserFactory = require("../src/factory/userFactory");
        const userService = await UserFactory.createInstance()
        const result = await userService.find()
        deepStrictEqual(result, expected)
        rewiremock.disable()
    }
})();