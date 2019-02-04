import React, { Component } from "react";
import './login.css';
import Axios from "axios";

class Login extends Component {
    state = {
        userInput: ' ',
        passwordInput: ' ',
    }
    inputName(event) {
        this.setState({ userInput: event.target.value })
    }
    inputPassword(event) {
        this.setState({ passwordInput: event.target.value })
    }
    onValidate() {
        Axios.post("https://training.gdbase.be/server/login.php", { username: this.state.userInput, password: this.state.passwordInput }).then(res => { console.log(res); })
    }
    render() {
        console.log("render");
        return (
            <div className="login-background">
                <div className="login-container">
                    <label>User Name:</label><br />
                    <input type="text" onChange={this.inputName.bind(this)} /><br />
                    <label>Password:</label><br />
                    <input type="password" onChange={this.inputPassword.bind(this)} /><br /><br />
                    <button type="button" onClick={this.onValidate.bind(this)}>Login</button>
                </div>
            </div>
        )
    }
}

export default Login;