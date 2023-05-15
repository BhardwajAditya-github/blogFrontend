import React from 'react';
import Layout from '../layout/Layout';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`https://blogserver-que3.onrender.com/login`, { email, password })
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/addblog/" + email)
            }
            else {
                toast.error(res.data.message);
            }
        }
        catch (error) {
            toast.error("Something went wrong !")
        }
    }

    return (
        <Layout>
            <div className='signup'>
                <form onSubmit={handleSubmit}>
                    <div className='signup-input'><label for="mail">Email</label><input id='mail' type='email' placeholder='Enter your email' value={email} onChange={(e) => { setEmail(e.target.value) }}></input></div>
                    <div className='signup-input'><label for="pass">Password</label><input id='pass' type='password' placeholder='Enter your password' value={password} onChange={(e) => { setPassword(e.target.value) }}></input></div>
                    <div className='signup-input' style={{ backgroundColor: "#00000000" }}><button type='submit' className='signup-btn'>Login</button></div>
                </form>
            </div>
        </Layout>
    )
}

export default Login