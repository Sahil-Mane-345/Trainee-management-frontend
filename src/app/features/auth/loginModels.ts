import { required } from "@angular/forms/signals"

export interface LoginFormModel {
    userName: string,
    password: string
}

export const loginFormErrors = {
    userName : {
        required : "UserName is Required",
        minlength: "UserName must containe minimum 3 characters",
        maxlength: "UserName must contain maximum 10 characters"
    },
    password : {
        required: "Password is Required",
        minlength: "Password must contain minimum 8 characters",
        pattern: "Password must contain atleast 1 small, capital, numeric and special character"
    }
}