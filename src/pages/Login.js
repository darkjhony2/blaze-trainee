import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../actions/login";
import { LoginLayout } from "../layout/LoginLayout";



export class Login extends React.Component {


    state = {
        username: '',
        password: '',
        loading: false
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

        alert("hola")

        this.props.dispatch(login(data)).then((response) => {
            console.log(response);
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <LoginLayout title='Login'>
                <form onSubmit={this.onSubmit}>
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
                                <Button type='submit' variant="contained" fullWidth>
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
    console.log("state", state)
    return { ...state };
}


export default connect(mapStateToProps)(Login);