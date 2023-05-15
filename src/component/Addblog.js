import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
// import preview from '../layout/images/back.jpg'


const Addblog = () => {
    const [shownav, setShownav] = useState(false);
    const [title, setTitle] = useState("");
    const [keyword, setKeywords] = useState("");
    const [desc, setDesc] = useState("");
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const author = pathname.split('/')[2];

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setPreviewImage(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('image', selectedFile);
            formData.append('title', title);
            formData.append('desc', desc);
            formData.append('keyword', keyword);
            formData.append('author', author);
            const res = await axios.post(`https://blogserver-que3.onrender.com/addblog`, formData)
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/")
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
        <div className='add'>
            <div className={shownav ? "navbar responsive" : "navbar"}>
                <NavLink to="/">Logout</NavLink>
                <NavLink to="/addblog">Add Blogs</NavLink>
                <a href="#" className='icon' onClick={() => setShownav(!shownav)}>&#9776;</a>
            </div>
            <Toaster />
            <div className='add-blogs'>
                <h1>Create your Post</h1>
                <br></br><hr></hr><br></br>
                <form onSubmit={handleSubmit}>
                    <input type="file" onChange={handleFileChange} className='select-img' />
                    {previewImage && <img src={previewImage} alt="Preview" className='preview' />}
                    <br></br>
                    <input type='text' placeholder='Enter your title' value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
                    <br></br>
                    <textarea placeholder='Write Long ...............' value={desc} onChange={(e) => { setDesc(e.target.value) }}></textarea>
                    <br></br><br></br>
                    <input type='text' placeholder='Add keywords' value={keyword} onChange={(e) => { setKeywords(e.target.value) }}></input>
                    <br></br>
                    <button className='signup-btn' type='submit' style={{ padding: "15px 30px" }}>Add</button>
                </form>
            </div>
        </div>
    )
}

export default Addblog