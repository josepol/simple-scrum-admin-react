import React, { Component } from 'react';
import LoginForm from './LoginForm';
import withCard from '../common/Card';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {};
        this.loginSubmit = this.loginSubmit.bind(this);
    }

    loginSubmit() {
        console.log('submit', this);
    }

    render() {
        return (
            <div>
                <span>Login</span>
                {withCard(<LoginForm onLoginSubmit={this.loginSubmit} />)}
            </div>
        );
    }
}
