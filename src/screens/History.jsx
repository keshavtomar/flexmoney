import React, { useState, useEffect } from "react";
import { useAuth } from "../components/AuthContext";
import Navbar from "../components/Navbar";

const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Month is zero-based, so add 1
  const year = date.getFullYear();
  return `${day < 10 ? "0" : ""}${day}-${
    month < 10 ? "0" : ""
  }${month}-${year}`;
};

const PaymentTable = ({ payments }) => {
  const tableStyle = { margin: "auto", marginTop: "20px" };
  const thBorderStyle = { borderBottom: "1px solid #ffffff" };
  const columnStyle = {
    paddingRight: "10px",
    paddingLeft: "10px",
    marginRight: "20px",
    color: "white",
  };
  return (
    <div>
      <h2 style={{ color: "white" }}>Payment Table</h2>
      <table border="1" style={tableStyle}>
        <thead>
          <tr style={thBorderStyle}>
            <th style={columnStyle}>Serial No.</th>
            <th style={columnStyle}>Amount</th>
            <th style={columnStyle}>Payment Date</th>
            <th style={columnStyle}>Batch</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td style={columnStyle}>{index + 1}</td>
              <td style={columnStyle}>{payment.amount}</td>
              <td style={columnStyle}>{formatDate(payment.payment_date)}</td>
              <td style={columnStyle}>
                {payment.class_id === 1 ? (
                  <div>6-7 AM</div>
                ) : (
                  <div>
                    {payment.class_id === 2 ? (
                      <div>7-8 AM</div>
                    ) : (
                      <div>
                        {payment.class_id === 3 ? (
                          <div>8-9 AM</div>
                        ) : (
                          <div>5-6 PM</div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function History() {
  const { isLoggedIn } = useAuth();
  const [history, setHistory] = useState(false);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const checkPayment = async () => {
      const response = await fetch("https://flexmoney-api.onrender.com/api/userstatus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: localStorage.getItem("user_id"),
        }),
      });
      const x = await response.json();
      if (x.paid === true) {
        console.log(x.payments);
        setHistory(true);
        setPayments(x.payments);
      }
    };

    checkPayment();
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div>
      <Navbar />
      {!isLoggedIn ? (
        <div>
          <div>Please Login to check</div>
        </div>
      ) : (
        <div>
          {history ? (
            <div
              style={{
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                marginTop: "10px",
                padding: "auto",
              }}
            >
              <PaymentTable payments={payments} />
            </div>
          ) : (
            <p>There is nothing to show</p>
          )}
        </div>
      )}
    </div>
  );
}