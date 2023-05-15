import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../layout/Header';


const UserBlog = () => {
    const { pathname } = useLocation();
    const [blogs, setBlogs] = useState([]);
    const title = pathname.split('/')[2];

    useEffect(() => {
        fetchBlogs();
    }, []);
    const fetchBlogs = async () => {
        try {
            const response = await axios.get('https://blogserver-que3.onrender.com/blogs/' + title);
            setBlogs(response.data);
            console.log(response.data)
        } catch (error) {
            console.log('Error fetching blogs:', error);
        }
    };

    return (
        <div>
            <Header />
            {blogs.length > 0 ? (
                <div className='userblog'>
                    <h1>{blogs[0].title}</h1>
                    <img src={"https://blogserver-que3.onrender.com" + blogs[0].imageUrl} alt='blog' />
                    <p className='blog-p'>{blogs[0].desc}</p>
                    <p className='blog-p'>Author : {blogs[0].author}</p>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default UserBlog