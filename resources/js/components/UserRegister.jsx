import React, { useEffect, useState } from 'react';
import axios from "axios";

let UserRegister = () => {

    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value });
    }

    let Register = (e) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }

        // axios.post(`/api/register`, data).then(res => {
        //     if(res.data.status === 200){
        //         localStorage.setItem('auth_token', res.data.token);
        //         localStorage.setItem('auth_name', res.data.username);
        //         swal("Success", res.data.message, "success");
        //         history.pushState('/')
        //     } else {
        //         setRegister({...registerInput, error_list: res.data.validation_errors});
        //     }
        // });
    }

    return (
        <div>
            <form onSubmit={Register}>
                <div>
                    <input name='name' type="text" onChange={handleInput} />
                </div>
                <div>
                    <input name='email' type="email" onChange={handleInput} />
                </div>
                <div>
                    <input name='password' type="text" onChange={handleInput} />
                </div>
            </form>
        </div>
    );
};

export default UserRegister;