import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./PaymentMethods.css";
const PaymentMethods = () => {
  return (
    <div className="paymentPage">
      <h2>Select any Payment option for online payments</h2>
      <div className="paymentDiv">
        <button className="btn">
          <Link className="link" to="/upi-payment">
            {" "}
            UPI
          </Link>
        </button>
        <button className="btn">
          <Link className="link" to="/card-payment">
            Card
          </Link>
        </button>
        <button className="btn">
          <Link className="link" to="/netbanking-payment">
            Netbanking
          </Link>
        </button>
      </div>

      <br />
      <br />

      <Outlet />
    </div>
  );
};

export default PaymentMethods;
