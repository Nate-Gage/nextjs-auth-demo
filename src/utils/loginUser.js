import React from 'react';
import axios from 'axios';

const loginUser = (user) => {
    axios.post('http://localhost:3000/api/signin', user)
        .then(res => {
            if (res.status === 200) {
                console.log(res.data);
                window.location = '/home';
            } else {
                setErrMsg(res.data.error);
            }
        })
        .catch(err => {
            setErrMsg(err.response.data.error)
            console.log(err.response.data.error);
        })
};

export default loginUser;