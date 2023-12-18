import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Card() {
    let navigate = useNavigate();
    const [paidstatus,setpaidstatus] = useState(false);

    const filldata = async()=>{
        const response = await fetch("http://localhost:4000/api/userstatus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id:localStorage.getItem("user_id")
          }),
        });
        const status = await response.json().paid;
        setpaidstatus(status);
    }

    const handleEnroll = ()=>{
        navigate("/payment");
    }

    useEffect(()=>{
        console.log(localStorage.getItem("user_id"));
        filldata();
    },[]);

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
                <div className="card-body">
                    {/* <h5 className="card-title">{props.foodItem.name}</h5>
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
                        <div className='d-inline h-100'>₹{finalPrice}/-</div> */}
                        <hr></hr>
                        {!paidstatus? 
                        <button className={'btn btn-success justify-center ms-2'} onClick={handleEnroll}>
                            Enroll Now
                        </button>
                        :null}

                    {/* </div> */}
                </div >
            </div >
        </div >

    )
}
