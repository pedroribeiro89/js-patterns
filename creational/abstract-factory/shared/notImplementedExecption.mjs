export default class NotImplementedExecption extends Error {
    constructor(message) {
        super(`the "${message}" function was not implemented`)
        this.name = 'NotImplementedExecption'
    }
}