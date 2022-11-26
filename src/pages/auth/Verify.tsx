import React, { useEffect } from 'react';
import { Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get('token');
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/auth/verify-email', { headers: { Authorization: 'Bearer ' + token } })
            .then((response) => {
                console.log('verify:', response);
                const { data } = response;
                if (data.status) {
                    navigate('/login');
                } else {
                    navigate('/home');
                }
            });
    }, []);
    return <div>Đang xác thực..</div>;
};

export default Verify;
