import NotImplementedExecption from "../notImplementedExecption.mjs";
export default class TableComponent {
    render(data) {
        throw NotImplementedExecption(this.render.name)
    }
}