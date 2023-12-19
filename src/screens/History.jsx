import React, { useState } from "react";
import { useAuth } from "../components/AuthContext";
import Navbar from "../components/Navbar";

const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Month is zero-based, so add 1
  const year = date.getFullYear();
  return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
};

const PaymentTable = ({ payments }) => {
  return (
    <div>
      <h2>Payment Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Month</th>
            <th>Payment Date</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{payment.month}</td>
              <td>{formatDate(payment.payment_date)}</td>
              <td>{payment.batch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function History() {
  const { isLoggedIn } = useAuth();
  const [history, sethistory] = useState(false);
  const [payments, setPayments] = useState([]);

  const checkPayment = async () => {
    const response = await fetch("http://localhost:4000/api/userstatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: localStorage.getItem("user_id"),
      }),
    });
    const x = await response.json();
    if (x.paid===true) {
        console.log(x.payments);
      sethistory(true);
      setPayments(x.payments);
    }
  };

  useState(async() => {
    await checkPayment();
    console.log(payments);
  }, []);

  return (
    <div>
      <Navbar />
      {isLoggedIn ? (
        <div>Please Login to check</div>
      ) : (
        <div>
          {history ? (
            <div>
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

// import React from 'react';

// const PaymentTable = ({ payments }) => {
//   return (
//     <div>
//       <h2>Payment Table</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Serial No.</th>
//             <th>Month</th>
//             <th>Payment Date</th>
//             <th>Batch</th>
//           </tr>
//         </thead>
//         <tbody>
//           {payments.map((payment, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{payment.month}</td>
//               <td>{formatDate(payment.paymentDate)}</td>
//               <td>{payment.batch}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // Function to format date as DD-MM-YYYY
// const formatDate = (inputDate) => {
//   const date = new Date(inputDate);
//   const day = date.getDate();
//   const month = date.getMonth() + 1; // Month is zero-based, so add 1
//   const year = date.getFullYear();
//   return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
// };

// // Example usage:
// const paymentsArray = [
//   { month: 'January', paymentDate: '2024-01-01T00:00:00.000Z', batch: 'Morning' },
//   { month: 'February', paymentDate: '2024-02-15T00:00:00.000Z', batch: 'Evening' },
//   // Add more payment objects as needed
// ];

// const App = () => {
//   return <PaymentTable payments={paymentsArray} />;
// };

// export default App;
