import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import axiosWithAuth from '../utils/axiosWithAuth';



const Logout = () => {  

const { push } = useHistory();

useEffect(()=> {
    
    axiosWithAuth()
    .post('/logout')
        .then(res => {
            push('/login')
            localStorage.removeItem('token');
            
        })
    },[]);
        return(<div><h2>Logged Out!</h2></div>);
    }

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.