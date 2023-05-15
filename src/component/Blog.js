import React from 'react';
import Layout from '../layout/Layout';
import back from '../layout/images/back.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetchBlogs();
    }, []);
    const fetchBlogs = async () => {
        try {
            const response = await axios.get('https://blogserver-que3.onrender.com/blogs');
            setBlogs(response.data);
            console.log(response.data)
        } catch (error) {
            console.log('Error fetching blogs:', error);
        }
    };
    return (
        <Layout>
            <div className="blog">
                <div className='blog-content'>
                    {/* <Link to="/blogs/exercise"> */}
                    <div className='guide-blog'>
                        <img src={back} alt='guide-blog' className='guide-blog-img'></img>
                        <div className='blog-info'>
                            <h2 className='blog-head'>Guide for publishing your blogs on bloggy</h2>
                            <p className='blog-p'>Start by creating a account on bloggy. Once you have created your account you can create your own blogs and update their title and content very easily. This is not a actual blogjust a small guide so please don't click on this.</p>
                            <p className='blog-p'>Author : Aditya Bhardwaj</p>
                        </div>
                    </div>
                    <br></br>
                    {/* </Link> */}
                    <hr></hr>
                    <h1>Community blogs</h1>
                    <div className='community-blogs'>
                        {/* <Link to="/blogs/sa">
                            <div className='c-blogs-div'><img src={back} className='c-blog' alt='community-blog'></img><h3 className='blog-head-h'>User Added blog</h3></div>
                        </Link> */}
                        {blogs.map((blog) => (
                            <Link to={"/blogs/" + blog.title}>
                                <div key={blog.id} className='c-blogs-div'><img src={"https://blogserver-que3.onrender.com" + blog.imageUrl} className='c-blog' alt='community-blog'></img><h3 className='blog-head-h'>{blog.title}</h3><p className='blog-p'>Author : {blog.author}</p></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Blog