import { Alert } from '@mui/material';
import Axios from 'axios';
import { useEffect } from 'react';

export const SigninServices = () => {
    const payload = {
        email: '',
        password: '',
    };
    return Axios.post('http://localhost:8000/api/signin', payload)
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            // Alert(error.response.message);
        });
};

// const [post, setPost];
// useEffect(
    // const response=SigninServices("sdadas","sâdasd");
    // response.then(
        // (data)=>setPost(data);
    // )
    // ,[]);
