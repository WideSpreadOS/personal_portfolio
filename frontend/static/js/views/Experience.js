import Layout from "./Layout.js";

export default class extends Layout {
    constructor(params) {
        super(params);
        this.setTitle("Experience");
    }

    async getHtml() {
        return `
            <div class="spread-container">
                <h1>Jonny O's Experience</h1>
            </div>
        `;
    }
}