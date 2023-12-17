import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Card() {
    return (
        <div>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="card m-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src='/images/yoga.png' className="card-img-top" alt="..." />
                {/* <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded' style={{ "color": "white" }} onChange={(e) => setqty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option style={{ "color": "white" }} key={i + 1} value={i + 1}>{i + 1}</option>
                                );
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded' style={{ "color": "white" }} ref={priceRef} onChange={(e) => setsize(e.target.value)}>
                            {priceOptions.map((data) => {
                                return (
                                    <option key={data} value={data}>{data}</option>
                                );
                            })}
                        </select>
                        <div className='d-inline h-100'>₹{finalPrice}/-</div>
                        <hr></hr>
                        <button className={'btn btn-success justify-center ms-2'} onClick={handleAddtoCart}>
                            {dataExist ? <span>Update</span> : <span>Add to Cart</span>}
                        </button>

                    </div>
                </div > */}
            </div >
        </div >

    )
}
