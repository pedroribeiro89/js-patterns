class UserService {
    constructor({ userRepo }) {
        this.userRepo = userRepo
    }

    async find(query) {
        //business logic
        const users =  await this.userRepo.find(query)
        return users.map(item => ({ ...item, name: item.name.toUpperCase() }))
    }
}

module.exports = UserService