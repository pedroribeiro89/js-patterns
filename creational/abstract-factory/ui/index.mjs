import {database} from "../shared/data.mjs";

class App {
    constructor(factory) {
        this.table = factory.createTable()
    }

    init(database) {
        this.table.render(database)
    }
}

;(async function main() {
    const path = globalThis.window ? 'browser' : 'console'
    //dynamic import:
    const {default: ViewFactory} = await import(`./../platforms/${path}/index.mjs`)

    const app = new App(new ViewFactory())
    app.init(database)
})();