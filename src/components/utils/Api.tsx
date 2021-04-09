import axios from "axios";
import React from "react";

export default function AppApi() {
    const set_axios_data = () => {
        axios.defaults.baseURL = Request.BASE_URL;
        axios.defaults.headers['common']['Content-Type'] = 'application/x-www-form-urlencoded';
        axios.defaults.headers['common']['Source'] = 'web';
        axios.defaults.timeout = 1000 * 60

        axios.interceptors.response.use(function (response) {
            console.log(response.data)
            return response;
        }, function (error) {
            console.log(error)
            return Promise.reject(error);
        });
    }

    React.useEffect(() => {
        set_axios_data()
    }, [])

    return (
        <>
        </>
    )
}

export class Request {
    static BASE_URL = "https://roomsapi.ichuzz2work.com/"

    static get_data(data: any) {
        const form = new FormData();
        Object.entries(data).forEach(([prop, val]) => {
            if (val !== null) {
                form.append(prop, val as string)
            }
        })
        return form
    }

    static create_user(data: {
        first_name: string, last_name: string, nin_number: string, email_address: string, phone_number: string, user_type: string,
        login_password: string, business_name: string, business_location: string
    }) {
        return axios({method: 'post', url: 'auth/create', data: this.get_data(data)});
    }

    static login_user(data: { email_contact: string, login_password: string }) {
        return axios({method: 'post', url: 'auth/login', data: this.get_data(data)});
    }

    static save_stock(data: {
        business_id: number, stock_name: string, available_quantity: number, stock_price: number, stock_id: string
    }) {
        return axios({method: 'post', url: 'stock/save', data: this.get_data(data)});
    }

    static get_business_stock() {
        return axios({method: 'get', url: 'stock/business'});
    }

    static get_stock(params: { business_id: number }) {
        return axios({method: 'get', url: 'stock/get', params: params});
    }

}