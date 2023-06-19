const validate = data => {
    const errors = {}

    let pattern = /e/;

    if (!data.name.trim()) {
        errors.name = "name is required"
    } else {
        delete errors.name
    }

    if (!data.email) {
        errors.email = "email is required"
    }
    // else if (!/e/.test(data.email)) {
    //     errors.email = "email is invalid"
    // }
    else {
        delete errors.email
    }
    if (!data.password) {
        errors.password = "password is required"
    } else {
        delete errors.password
    }

    return errors


}

export default validate;