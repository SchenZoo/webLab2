// src/js/components/Login.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { login,register } from "../actions/index";
import { Form,FormControl,FormGroup,ControlLabel,Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.registerSubmit = this.registerSubmit.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  registerSubmit(event)
  {
    event.preventDefault();
    if (this.state.username && this.state.password) { 
      console.log(this.state);
      this.props.register(this.state);
    }
  }
  loginSubmit(event)
  {
    event.preventDefault();
    if (this.state.username && this.state.password) { 
      this.props.login(this.state);
    }
  }


  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    if(this.props.user && !this.props.user.msg)
    return <Redirect to= "/home" push/>;
    return (
      <div className="well" style={{maxWidth: 500, margin: '0 auto 10px' }}>
      <Form >
        <FormGroup>
            <ControlLabel>Username</ControlLabel>
            <FormControl
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
            <ControlLabel>Password</ControlLabel>
            <FormControl
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        <ControlLabel><font color="red">{this.props.user && this.props.user.msg}</font></ControlLabel>
        <div className="well" style={{maxWidth: 200, margin: '0 auto 10px' }}>
          <Button onClick={this.loginSubmit} bsStyle="primary" bsSize="large" block>
          Login
          </Button>
          <Button onClick={this.registerSubmit} bsSize="large" block>
          Register
          </Button>
        </div>
        </FormGroup>
      </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
 return bindActionCreators({
    register,
    login
}, dispatch)
};
const mapStateToProps = state => {
  return { user: state.user };
};
const Login = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
export default Login;