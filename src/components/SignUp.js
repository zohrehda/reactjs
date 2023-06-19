import React, { useEffect, useState } from 'react';

import validate from './validate';


const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: true
    });

    const [errors, setErrors] = useState({})

    useEffect(() => {
        setErrors(validate(data))
        console.log(errors)
    }, [data])

    const changeHandler = (event) => {

        if (event.target.name === 'isAccepted') {
            setData({
                ...data,
                [event.target.name]: event.target.checked
            });
        } else {
            setData({
                ...data,
                [event.target.name]: event.target.value
            });

        }
    }


    return (

        <div className='container'>
            <form>
                <div className='input-group'>
                    <label>Name</label>
                    <input type='text' name='name' value={data.name} onChange={changeHandler} />
                </div>

                <div className='input-group'>
                    <label>Email</label>
                    <input type='text' name='email' value={data.email} onChange={changeHandler} />
                </div>

                <div className='input-group'>
                    <label>Password</label>
                    <input type='text' name='password' value={data.password} onChange={changeHandler} />
                </div>

                <div className='input-group'>
                    <label>Confirm Password</label>
                    <input type='text' name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} />
                </div>

                <div className='input-group'>
                    <label>I accept terms</label>
                    <input type="checkbox" name='isAccepted' value={data.isAccepted} onChange={changeHandler} />
                </div>

                <div>
                    <a href='#'> login </a>
                    <button type='submit'>sign up</button>
                </div>

            </form>
        </div>
    );
};

export default SignUp;