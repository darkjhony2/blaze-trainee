import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/login";
import { LoginLayout } from "../layout/LoginLayout";
import { saveObject } from "../utils";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false
        }
    }
    onSubmit = () => {

        const {
            username,
            password
        } = this.state;

        this.setState({
            loading: true
        })

        let data = {};
        data.username = username;
        data.password = password;

        this.props.dispatch(login(data)).then((response) => {
            let { token, username, roles, shopId } = response;
            saveObject("token", token);
            saveObject("username", username);
            saveObject("rol", roles[0]);
            saveObject("shopId", shopId);
            window.location.href = "/switch"
        });
    }

    onKeyEnter = (e) => {
        if(e.key === "Enter"){
            this.onSubmit();
        }
    } 

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        return (
            <LoginLayout title='Login'>
                <form onKeyUp={e => this.onKeyEnter(e)}>
                    <Grid container>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Username"
                                type={'text'}
                                placeholder='Write your username'
                                name='username'
                                onChange={this.onChange}
                                value={this.state.username}
                                fullWidth />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Password"
                                type={'password'}
                                placeholder='Password'
                                name='password'
                                onChange={this.onChange}
                                value={this.state.password}
                                fullWidth />
                        </Grid>

                        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} justifyContent="center">
                            <Grid item xs={12} sm={6}>
                                <Button id={"loginBtn"} onClick={this.onSubmit} type='button' variant="contained" fullWidth>
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </LoginLayout>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
}


export default connect(mapStateToProps)(Login);