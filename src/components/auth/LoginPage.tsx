import React from 'react';
import {Form, Button, Container} from 'semantic-ui-react';
import Footer from '../Footer'
import {Request} from "../utils/Api";
import {UserRoles} from "./RegisterPage";


interface Login {
    businessName: string;
    nin: number;
    password: any

}


export default function LoginPage() {
    const [login, setLogin] = React.useState({credential: '', password: ''})
    const [error, setError] = React.useState("")
    const [role, setRole] = React.useState("")

   
    const continue_login = () => {
        //todo show some loading progress
        //todo data validation

        Request.login_user({email_contact: login.credential, login_password: login.password})
            .then((response) => {
                if (response.data.hasOwnProperty("code")) {
                    switch (response.data.code as number) {
                        case 1:
                            const profile: {
                                email_address: string, first_name: string, last_name: string, nin_number: string,
                                phone_number: string, user_id: number, user_type: UserRoles
                            } = response.data.profile

                            const businesses: Array<{
                                business_id: number, business_location: string, business_name: string, user_id: number
                            }> = response.data.businesses

                            //todo, save this token under store
                            localStorage.setItem("user_token", response.data.user_token)

                            if (profile.user_type === 'buyer') {
                                //dashboard to a seller
                            } else if (profile.user_type === 'seller') {
                                //A seller only or both roles can have the same dashboard as a seller
                            }
                            break
                        case 2:
                            setError("Account not found")
                            break
                        case 3:
                            setError("Password mismatch")
                            break
                    }
                } else {
                    setError("Could not login, please retry")
                }
            })
            .catch(() => {
                setError("Could not login, please retry")
            })
    }


    return (
        <div>
            <nav className="sticky-top">
                <input type="checkbox" id="check"/>
                <label className="checkbtn">
                    <i className="fas fa-bar"/>
                </label>
                <label className="logo"><a href="/">Rooms Application</a></label>
            </nav>
            <div className="login-main">
                <Container>
            <Form className="col-md-6 w-50 ">
                <h1>Login to your account</h1>
                <Form.Field>
                    <label>Email Address or Phone Number</label>
                    <input placeholder='Enter Email Address or Phone Number' value={login.credential}
                           onChange={(event) => {
                               setLogin({...login, credential: event.target.value})
                           }}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Enter Login Password' name='Password' type='password' value={login.password}
                           onChange={(event) => {
                               setLogin({...login, password: event.target.value})
                           }}/>
                </Form.Field>
                <Button type='submit' value="Login" onClick={continue_login}>Login</Button>
            </Form>
            </Container>
            </div>
            <Footer/>
        </div>
    )

}
