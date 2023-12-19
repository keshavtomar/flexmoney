import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Enrollment() {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  const [paidstatus, setpaidstatus] = useState(true);

  const navigate = useNavigate();

  // State variables for form inputs
  const [selectedBatch, setSelectedBatch] = useState("");
  const [isConfirmationChecked, setIsConfirmationChecked] = useState(false);

  const handleReturn = () => {
    navigate("/");
  };

  const handleBatchChange = (event) => {
    setSelectedBatch(event.target.value);
  };

  const handleConfirmationChange = (event) => {
    setIsConfirmationChecked(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isConfirmationChecked) {
      alert("Please agree to the confirmation");
      return;
    } else if (!isLoggedIn) {
      alert("Please Login first");
      return;
    } else {
      const response = await fetch("http://localhost:4000/api/enrolluser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: localStorage.getItem("user_id"),
          batch: selectedBatch,
        }),
      });
      console.log(response);
      if (response.status === 200) {
        navigate("/");
      } else if (response.status === 205) {
        console.log("Age not eligible");
        toast.error("Age not eligible (should be 18-60)", {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Error in payment", {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

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
  };

  useEffect(() => {
    checkPayment();
  }, []);

  return (
    <div>
      <ToastContainer position="bottom-left" autoClose={2000} />
      {!isLoggedIn ? (
        <div style={{ color: "white", textAlign: "center" }}>
          <button
            onClick={handleReturn}
            style={{
              position: "absolute",
              bottom: "10px",
              borderRadius: "20px",
              transform: "translateX(-50%)",
            }}
          >
            Back to home
          </button>
          <p>Please Login first</p>
        </div>
      ) : (
        <div>
          <button
            onClick={handleReturn}
            style={{
              position: "absolute",
              bottom: "10px",
              borderRadius: "20px",
            }}
          >
            Back to home
          </button>
          <div className="form-body">
            <div className="row">
              <div className="form-holder">
                <div className="form-content">
                  <div className="form-items">
                    <h3>Enroll Today</h3>
                    <p>Fill in the data below.</p>
                    <form
                      className="requires-validation"
                      noValidate
                      onSubmit={handleSubmit}
                    >
                      <div className="col-md-12">
                        <p>Amount ₹500/-</p>
                      </div>

                      <div className="col-md-12">
                        <select
                          className="form-select mt-3"
                          required
                          value={selectedBatch}
                          onChange={handleBatchChange}
                        >
                          <option selected disabled value="">
                            Batch
                          </option>
                          <option value="1">6-7 AM</option>
                          <option value="2">7-8 AM</option>
                          <option value="3">8-9 AM</option>
                          <option value="4">5-6 PM</option>
                        </select>
                        <div className="valid-feedback">
                          You selected a position!
                        </div>
                        <div className="invalid-feedback">
                          Please select a position!
                        </div>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                          checked={isConfirmationChecked}
                          onChange={handleConfirmationChange}
                        />
                        <label className="form-check-label">
                          I confirm that this money will not be refunded
                        </label>
                        <div className="invalid-feedback">
                          Please confirm that the entered data are all correct!
                        </div>
                      </div>

                      <div className="form-button mt-3">
                        {paidstatus ? (
                          <button
                            id="submit"
                            type="submit"
                            className="btn btn-primary"
                            disabled
                          >
                            Paid Already
                          </button>
                        ) : (
                          <button
                            id="submit"
                            type="submit"
                            className="btn btn-primary"
                          >
                            Make Payment
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
