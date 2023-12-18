import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'


export default function Navbar() {
    let navigate = useNavigate()
    const {  logout } = useAuth();

    const handleLogout = () => {
        localStorage.removeItem("authToken2");
        localStorage.removeItem("user_id");
        logout();
        navigate("/");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2" to="/">Yoga-caze</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className='navbar-nav me-auto'>
                            <li className='nav-item'>
                                <Link className='nav-link active fs-5' to="/">Home</Link>
                            </li>
                            {localStorage.getItem("authToken2") ?
                                <li className='nav-item'>
                                    <Link className='nav-link active fs-5' to="/myOrder">My Payment History</Link>
                                </li>
                                : ""}
                        </ul>

                        {!localStorage.getItem("authToken2") ? <div className='d-flex'>
                            <Link className="mx-2 btn bg-white text-success" to="/login">Login</Link>
                            <Link className="mx-2 btn bg-white text-success" to="/register">Signup</Link>
                        </div>
                            :
                            <div className="mx-2 btn bg-white text-danger" onClick={handleLogout}>Logout</div>
                        }
                    </div>
                </div>
            </nav >
        </div >
    )
}
