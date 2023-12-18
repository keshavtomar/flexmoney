import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import { useAuth } from '../components/AuthContext';
// import Footer from '../components/Footer';
// import Card from '../components/Card';

export default function Home() {
    const { isLoggedIn} = useAuth();
    return (
        <div>
            <Navbar />
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain" }}>
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <div className="d-flex" style={{alignContent:'center', justifyContent:'center', alignSelf:'center', textAlign:'center', position:'relative', bottom:'50vh', transform:'translateY(50%)'}}>
                            
                            {isLoggedIn?<Card/>:null}
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                            {/* <button className="btn btn-success" type="submit">Search</button> */}
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900x600/?yoga" className="d-block w-100" alt="..." style={{ filter: "brightness(50%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x600/?exercise" className="d-block w-100" alt="..." style={{ filter: "brightness(50%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x600/?meditation" className="d-block w-100" alt="..." style={{ filter: "brightness(50%)" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <Footer /> */}
        </div >
    )
}
