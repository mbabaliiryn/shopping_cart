export default class AppUtils {
    // static is_valid_float_number(arg0: string) {
    //   throw new Error('Method not implemented.');
    // }
    public static is_valid_name(name: string): boolean {
        const regex = /^([a-zA-Z]{2,20})$/
        return regex.test(name)
    }

    public static is_valid_email(email: string): boolean {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    public static is_valid_password(password: string): boolean {
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        return regex.test(password)
    }

    public static get_user_token() {
        const user_token = localStorage.getItem("user_token")
        return user_token === null ? "" : user_token
    }
}