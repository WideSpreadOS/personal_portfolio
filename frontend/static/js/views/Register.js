import Layout from "./Layout.js";

export default class extends Layout {
    constructor(params) {
        super(params);
        this.setTitle("Register");
    }

    async getHtml() {
        return `
            <div class="spread-container">
                <h1>Create User Account</h1>
                <p>Want to message me or get a free WideSpread annonymous user account? Sign up below!</p>
                <small>My core principles are rooted in privacy and security, your information will never be sold or shared.</small>
                
                <div class="spread-form">
                    <div class="spread-form-header">
                        <h3>Register</h3>
                    </div>
                    <form action="/user/register" method="POST">
                        <input type="text" name="name" placeholder="Full Name" id="fullName">
                        <input type="text" name="username" placeholder="Username" id="userName">
                        <input type="email" name="email" placeholder="Email" id="email">
                        <input type="text" name="company" placeholder="Company" id="company">
                        <input type="password" name="password1" placeholder="Password" id="password1">
                        <input type="password" name="password2" placeholder="Confirm Password" id="password2">
                        <button type="submit" id="submit">Create</button>
                    </form>
                </div>
            </div>
            
        `;
    }
}