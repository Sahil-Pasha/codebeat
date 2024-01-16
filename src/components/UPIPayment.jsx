import React, { useState, Fragment } from "react";
import { Alert } from "antd";
import "./UPIPayment.css";

const UPIPayment = () => {
  const [upiId, setUpiId] = useState("");
  const [showError, setShowError] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handlePayment = () => {
    // Implement logic for UPI payment
    console.log(`Initiate UPI payment with ID: ${upiId}`);
    const res = isValid_UPI_ID(upiId);
    if (res === null) {
      setShowError(true);
    } else if (res) {
      setSuccessAlert(true);
      setShowError(false);
    } else if (!res) {
      setIsValid(true);
      setShowError(false);
      setSuccessAlert(false);
    }

    setUpiId("");
  };

  const isValid_UPI_ID = (upi_Id) => {
    if (upi_Id === "") {
      return null;
    }
    const regex = /^[a-zA-Z0-9.\-_]{4,256}@[a-zA-Z]{3,256}$/;
    const match = regex.exec(upi_Id);
    if (match) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Fragment>
      <div>
        <h3>UPI Payment</h3>
        <label className="upiLabel">
          Enter UPI ID:<span style={{ color: "red" }}>*</span>
        </label>
        <input
          className="upiInput"
          type="text"
          required
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
        />
        {showError && <p style={{ color: "red" }}>This field is required</p>}
        <div>
          <button className="upibtn" onClick={handlePayment}>
            Proceed to Payment
          </button>
        </div>
      </div>
      {successAlert && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Alert
            message="Congratulations "
            description="Now you are ready to pay with UPI"
            type="success"
            closable
            showIcon
          />
        </div>
      )}
      {isValid && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Alert
            message="Invalid UPI!. Please enter the valid UPI"
            type="error"
            closable
            showIcon
          />
        </div>
      )}
    </Fragment>
  );
};

export default UPIPayment;
