import Layout from "./Layout.js";

export default class extends Layout {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <div class="spread-container">
                <h1>About Jonny O</h1>
            </div>
        `;
    }
}