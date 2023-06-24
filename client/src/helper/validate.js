import toast from "react-hot-toast";

// validate login page username
export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);

    return errors;
}


// validate username

export default function usernameVerify(error= {}, values) {
    if (!values.username) {
        error.username = toast.error('Username Required');
    } else if (values.username.includes(" ")) {
        error.username = toast.error('Invalid username');
    } else if (values.username.length < 3) {
        error.username = toast.error('Must be 3 characters or more');
    } else if (values.username.length > 20) {
        error.username = toast.error('Must be 20 characters or less');
    } else if (!values.username.match(/^[a-zA-Z0-9_]+$/)) {
        error.username = toast.error('Invalid username');
    } else {
        error.username = toast.success('Valid username');
    }
    return error;
}


/** validate password */
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}

/** validate password */
function passwordVerify(errors = {}, values){
    /* eslint-disable no-useless-escape */
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error("Password Required...!");
    } else if(values.password.includes(" ")){
        errors.password = toast.error("Wrong Password...!");
    }else if(values.password.length < 4){
        errors.password = toast.error("Password must be more than 4 characters long");
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have special character");
    } else{
        errors.password = toast.success("Valid Password");
    }

    return errors;
}

/** validate reset password */
export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirm_pwd){
        errors.exist = toast.error("Password not match...!");
    }

    return errors;
}

