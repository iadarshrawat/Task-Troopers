import React, { useState } from 'react'
import "./Navbar.scss"
import { Link, useNavigate } from "react-router-dom"
import newRequest from '../../utils/newRequest';

function Navbar() {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    const handleLogout = async ()=>{
        try {
            await newRequest.post('/auth/logout');
            localStorage.setItem('currentUser', null);
            Navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <Link to='/' className='link'>
                        <span className='text'>fiverr</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={()=>setOpen(!open)}>
                            <img src={currentUser.img || './img/noavtar.jpeg'} alt="" />
                            <span>{currentUser.username}</span>
                            { open && (
                                <div className="option">
                                {currentUser?.isSeller && (
                                        <>
                                            <Link className='link' to='/mygigs'>Gigs</Link>
                                            <Link className='link' to='add'>Add new Gig</Link>
                                        </>
                                )}  
                                <Link className='link' to='orders'>Orders</Link>                            
                                <Link className='link' to='messages'>Messages</Link>                            
                                <Link className='link' onClick={handleLogout}>Logout</Link>                            
                            </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <hr />
            <div className="menu">
                <span>Test</span>
                <span>Test2</span>
            </div>
        </div>
    )
}

export default Navbar