const Database = require("../fake-database");
const UserRepo = require("../repository/userRepo");
const UserService = require("../service/userService");

class UserFactory {
    static async createInstance() {
        const db = new Database({ connectionString: 'mongodb://localhost' })
        const dbConnection = await db.connect()
        const userRepo = new UserRepo({ dbConnection })
        return new UserService({ userRepo })
    }
}

module.exports = UserFactory