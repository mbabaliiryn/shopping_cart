import axios, {AxiosRequestConfig} from "axios";

export interface Register {
    firstName: string;
    lastName: string;
    businessName: string;
    location: string;
    nin: number;
    email: string;
    contact: number;
    password: any;
    confirmPassword: any;
    userType: string

}

export interface Login {
    businessName: string;
    nin: number;
    password: any

}

export const onLogin = async (data: Login) => {
    const requestConfig: AxiosRequestConfig = {method: 'post', url: process.env.React_APP_BASE_URL + '/Login', data}
    try {
        const {data: response} = await axios.request(requestConfig);
    } catch (e) {
        console.error(e);
        return {error: e.response.data.message}
    }
}

export const onRegister = async (data: Register) => {
    const requestConfig: AxiosRequestConfig = {method: 'post', url: process.env.REACT_APP_API_BASE_URL + '/register', data}
    try {
        const {data: response} = await axios.request(requestConfig);
    } catch (e) {
        console.error(e.response);
        return {error: e.response.data.message}
    }
}