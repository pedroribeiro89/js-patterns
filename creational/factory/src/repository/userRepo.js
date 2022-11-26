class UserRepo {
    //Dependecy injection, no use of 'require'
    constructor({ dbConnection }) {
        this.dbConnection = dbConnection
    }
    async find(query) {
        return await this.dbConnection.find(query)
    }
}

module.exports = UserRepo