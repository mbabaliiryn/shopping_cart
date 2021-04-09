import {Form, Button, Container, InputOnChangeData} from 'semantic-ui-react'
import AppUtils from '../utils/AppUtils';
import React, {ChangeEvent} from "react";
import {Request} from "../utils/Api";
// import Footer from '../Footer'

export type UserRoles = 'buyer' | 'seller'

const options = [
    {key: 'b', text: 'Buyer', value: 'buyer'},
    {key: 's', text: 'Seller', value: 'seller'},
]

interface RegisterForm {
    firstName: string
    userType: UserRoles
    lastName: string
    businessName: string
    location: string
    nin: string
    email: string,
    contact: string,
    password: string,
    confirmPassword: string
}

export default function RegisterPage() {
    const [register, setRegister] = React.useState<RegisterForm>({
        firstName: '', userType: 'buyer', lastName: '',
        businessName: '', location: '', nin: '', email: '', contact: '', password: '', confirmPassword: ''
    })

    const set_error = (name: string, error: string) => {
        let element = document.getElementsByName(name)[0] as HTMLInputElement;
        if (!element.checkValidity()) {
            element.setCustomValidity(error);
            setTimeout(function () {
                element.reportValidity();
                element.setCustomValidity('');
            }, 1);
        }
    }

    const [error, setError] = React.useState("")

    const register_user = () => {
        //todo, other validations please
        if (!AppUtils.is_valid_name(register.firstName.trim())) {
            set_error("firstName", "Enter a valid first name")
        } else {
            //todo, can you get a way to show a loading progress to a user on every network request
            Request.create_user({
                business_location: register.location,
                business_name: register.businessName,
                email_address: register.email,
                first_name: register.firstName,
                last_name: register.lastName,
                login_password: register.password,
                nin_number: register.nin,
                phone_number: register.contact,
                user_type: register.userType
            })
                .then((response) => {
                    if (response.data.hasOwnProperty("code")) {
                        switch (response.data.code as number) {
                            case 1:
                                const businesses: Array<{
                                    business_id: number, business_location: string, business_name: string, user_id: number
                                }> = response.data.businesses

                                const profile: {
                                    email_address: string, first_name: string, last_name: string, nin_number: string,
                                    phone_number: string, user_id: number, user_type: UserRoles
                                } = response.data.profile

                                //todo, save this token under store
                                localStorage.setItem("user_token", response.data.user_token)

                                if (register.userType === 'buyer') {
                                    //dashboard to a seller
                                } else if (register.userType === 'seller') {
                                    //A seller only or both roles can have the same dashboard as a seller
                                }
                                break
                            case 2:
                                setError("Phone number is already in use")
                                break
                            case 3:
                                setError("Email address is already in use")
                                break
                        }
                    } else {
                        setError("Could not create account, please retry")
                    }
                })
                .catch(() => {
                    setError("Could not create account, please retry")
                })
        }
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
            <Container>
                <div className="row justify-content-center">
                    <div className="col-md-6  m-auto">
                        <Form>
                            <h1>New user? Register now</h1>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid name='firstName' value={register.firstName}
                                    onChange={(event, data) =>
                                        setRegister({...register, firstName: data.value})}
                                    label='First Name ' placeholder='Enter First Name'/>
                                <Form.Input fluid label='Last Name' placeholder='Enter Last Name' value={register.lastName}
                                            onChange={(event, data) =>
                                                setRegister({...register, lastName: data.value})}/>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='Business Name' placeholder='Enter Business Name' value={register.businessName}
                                            onChange={(event, data) =>
                                                setRegister({...register, businessName: data.value})}/>
                                <Form.Input fluid label='Nin Number' placeholder='Enter Nin Number' value={register.nin}
                                            onChange={(event, data) =>
                                                setRegister({...register, nin: data.value})}/>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='Location' placeholder='Enter Location'
                                            value={register.location}
                                            onChange={(event, data) =>
                                                setRegister({...register, location: data.value})}/>

                                <Form.Input fluid label='Email Address' placeholder='Enter Email Address' value={register.email}
                                            onChange={(event, data) =>
                                                setRegister({...register, email: data.value})}/>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='Telephone Number' placeholder='Enter Telephone Number'
                                            value={register.contact}
                                            onChange={(event, data) =>
                                                setRegister({...register, contact: data.value})}/>
                                <Form.Select fluid label='User Type' options={options} placeholder='User Type'
                                             name='User Type' value={register.userType}
                                             onChange={(event, data) => {
                                                 setRegister({...register, userType: data.value as UserRoles})
                                             }}/>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='Password' placeholder='Enter Password'
                                            type='password' value={register.password}
                                            onChange={(event, data) =>
                                                setRegister({...register, password: data.value})}/>
                                <Form.Input fluid label='Confirm Password' placeholder='Enter Password Confirmation'
                                            type='password' value={register.confirmPassword}
                                            onChange={(event, data) =>
                                                setRegister({...register, confirmPassword: data.value})}/>
                            </Form.Group>
                            <Button type='submit' onClick={register_user}>Register</Button>
                            <p>Have an account? <a href="/login">Login</a></p>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    )
}

