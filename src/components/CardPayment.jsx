import React, { useState } from "react";
import { Alert } from "antd";
import "./CardPayment.css";

const CardPayment = () => {
  const [cardType, setCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [numberError, setNumberError] = useState(false);
  const [numberErrorMessage, setNumberErrorMessage] = useState("");
  const [expiryError, setExpiryError] = useState(false);
  const [expiryErrorMessage, setExpiryErrorMessage] = useState("");
  const [cvvError, setCvvError] = useState(false);
  const [cvvErrorMessage, setCvvErrorMessage] = useState("");
  const [successAlert, setSuccessAlert] = useState(false);

  const formSubmit = (event) => {
    // Implement logic for Card payment
    event.preventDefault();
    if (
      cardTypeValidation(cardType) &&
      cardNumberValidation(cardNumber) &&
      cardExpiryValidation(expiryDate) &&
      cardCvvValidation(cvv)
    ) {
      setSuccessAlert(true);
    } else {
      setSuccessAlert(false);
    }
  };
  const cardTypeValidation = (cardType) => {
    if (cardType === "Credit" || cardType === "Debit") {
      return true;
    } else {
      return false;
    }
  };
  const cardNumberValidation = (cardNumber) => {
    if (cardNumber.toString().length === 16) {
      return true;
    } else if (cardNumber.toString().length > 16) {
      setNumberErrorMessage("Card number exceed the length");
      setNumberError(true);
    } else {
      setNumberErrorMessage("Card number subceed the length");
      setNumberError(true);
    }
  };

  const cardExpiryValidation = (expiryDate) => {
    const [month, year] = expiryDate.split("/");
    const numericMonth = parseInt(month, 10);
    const numericYear = parseInt(year, 10);
    const currentYear = new Date().getFullYear();

    if (numericMonth < 1 || numericMonth > 12) {
      setExpiryError(true);
      setExpiryErrorMessage("Month should be between 1 to 12");
      return false;
    } else if (numericYear < currentYear) {
      setExpiryError(true);
      setExpiryErrorMessage("Year should be greater than current year");
      return false;
    }
    return true;
  };
  const cardCvvValidation = (cvv) => {
    if (cvv.toString().length === 3) {
      return true;
    } else if (cvv.toString().length > 3) {
      setCvvErrorMessage("CVV number exceed the length");
      setCvvError(true);
    } else if (cvv.toString().length < 3) {
      setCvvErrorMessage("CVV number subceed the length");
      setCvvError(true);
    }
  };
  return (
    <div className="mainDiv">
      <h3>Card Payment</h3>
      <form onSubmit={formSubmit}>
        <div>
          <label className="inputLabel">
            Card type <span style={{ color: "red" }}>*</span>
          </label>
          <select
            className="input"
            required
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
          >
            <option value="">Select Card Type</option>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </div>
        <div>
          <label className="inputLabel">
            Card Number <span style={{ color: "red" }}>*</span>
          </label>
          <input
            className="input"
            type="number"
            required
            placeholder="card number.."
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          {numberError && (
            <>
              <p
                style={{ fontSize: "14px", marginLeft: "160px", color: "red" }}
              >
                {numberErrorMessage}
              </p>
            </>
          )}
        </div>
        <div>
          <label className="inputLabel">
            Expiry Date <span style={{ color: "red" }}>*</span>
          </label>
          <input
            className="input"
            type="text"
            required
            placeholder="mm/yy"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
          {expiryError && (
            <>
              <p
                style={{ fontSize: "14px", marginLeft: "160px", color: "red" }}
              >
                {expiryErrorMessage}
              </p>
            </>
          )}
        </div>
        <div>
          <label className="inputLabel">
            CVV <span style={{ color: "red" }}>*</span>
          </label>
          <input
            className="input"
            type="text"
            required
            placeholder="123.."
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />{" "}
          {cvvError && (
            <>
              <p
                style={{ fontSize: "14px", marginLeft: "160px", color: "red" }}
              >
                {cvvErrorMessage}
              </p>
            </>
          )}
        </div>
        <div>
          <label className="inputLabel">
            Card Holder Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            className="input"
            type="text"
            required
            placeholder="name.."
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
          />{" "}
        </div>
        <button className="cardButton" type="submit">
          Proceed to Payment
        </button>
      </form>
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
            description="Now you are ready to pay with Card"
            type="success"
            closable
            showIcon
          />
        </div>
      )}
    </div>
  );
};

export default CardPayment;
