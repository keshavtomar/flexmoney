import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Card() {
  let navigate = useNavigate();
  const [paidstatus, setpaidstatus] = useState(false);
  const [duedate, setduedate] = useState("");
  const [batch, setbatch] = useState("");

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-based, so add 1
    const year = date.getFullYear();

    // Format the date as DD - MM - YYYY
    const formattedDate = `${day < 10 ? "0" : ""}${day}-${
      month < 10 ? "0" : ""
    }${month}-${year}`;

    return formattedDate;
  }

  const checkPayment = async () => {
    const response = await fetch("http://localhost:4000/api/checkpayment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: localStorage.getItem("user_id"),
      }),
    });
    const x = await response.json();
    console.log(x);
    console.log(x.nextdue);
    setpaidstatus(x.paid);
    if (x.paid) {
      setduedate(formatDate(x.nextdue));
      if (x.batch === 1) {
        setbatch("6-7 AM");
      } else if (x.batch === 2) {
        setbatch("7-8 AM");
      } else if (x.batch === 3) {
        setbatch("8-9 AM");
      } else if (x.batch === 4) {
        setbatch("5-6 PM")
      }
    }
  };

  console.log(duedate);
  const handleEnroll = () => {
    navigate("/payment");
  };

  useEffect(() => {
    checkPayment();
  }, []);

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
      <div className="card m-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src="/images/yoga.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <hr></hr>
          {paidstatus ? (
            <div>
              <button
                className={"btn btn-success justify-center ms-2"}
                onClick={handleEnroll}
                disabled
              >
                Enrolled
              </button>
              <p style={{ color: "black" }}>Next Due date : {duedate}</p>
              <p style={{color:"black"}}>Batch : {batch}</p>
            </div>
          ) : (
            <button
              className={"btn btn-success justify-center ms-2"}
              onClick={handleEnroll}
            >
              Enroll Now
            </button>
          )}

          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
