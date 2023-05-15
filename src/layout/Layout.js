import React from 'react';
import Header from './Header';
import back from './images/back.jpg';
import { Toaster } from 'react-hot-toast';


const Layout = (props) => {
    return (
        <div className='layout'>
            <Header />
            <main className='content' style={{ backgroundImage: `url(${back})`, backgroundSize: "cover" }}>
                <Toaster />
                {props.children}
            </main>
        </div>
    )
}

export default Layout

