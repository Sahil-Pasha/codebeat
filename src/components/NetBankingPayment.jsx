import React, { useState } from "react";
import { Alert } from "antd";
import "./NetBankingPayment.css";

const NetBankingPayment = () => {
  const [selectedBank, setSelectedBank] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [accountNumberError, setAccountNumberError] = useState(false);
  const [accountNumberErrorMessage, setAccountNumberErrorMessage] =
    useState("");
  const [ifscCodeError, setIfscCodeError] = useState(false);
  const [ifscCodeErrorMessage, setIfscCodeErrorMessage] = useState("");
  const [successAlert, setSuccessAlert] = useState(false);

  const formSubmit = (event) => {
    event.preventDefault();
    if (
      accountNumberValidation(accountNumber) &&
      ifscCodeValidation(ifscCode)
    ) {
      setSuccessAlert(true);
    } else {
      setSuccessAlert(false);
    }
  };
  const accountNumberValidation = (accountNumber) => {
    if (
      accountNumber.toString().length >= 11 &&
      accountNumber.toString().length <= 16
    ) {
      return true;
    } else if (accountNumber.toString().length > 16) {
      setAccountNumberErrorMessage("Account number exceed the length");
      setAccountNumberError(true);
    } else if (accountNumber.toString().length < 11) {
      setAccountNumberErrorMessage("Account number subceed the length");
      setAccountNumberError(true);
    }
  };
  const ifscCodeValidation = (ifscCode) => {
    // IFSC code pattern: ^[A-Z]{4}0[A-Z0-9]{6}$
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;

    if (!ifscRegex.test(ifscCode)) {
      setIfscCodeErrorMessage("Invalid IFSC Code");
      setIfscCodeError(true);
    } else {
      return true;
    }
  };

  return (
    <div>
      <h3 className="netbanking">Netbanking Payment</h3>
      <form onSubmit={formSubmit}>
        <div>
          <label className="inputLabel">
            Select Bank:<span style={{ color: "red" }}>*</span>
          </label>
          <select
            className="netInput"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
          >
            <option>Select the bank</option>
            <option value="bank1">State bank of India</option>
            <option value="bank1">Punjab National Bank</option>
            <option value="bank1">Indian Bank</option>
            <option value="bank1">Allahabad Bank</option>
            <option value="bank1">Bank of Baroda</option>
            <option value="bank1">ICICI Bank</option>
            <option value="bank1">HDFC Bank</option>
            <option value="bank2">Prithma Bank</option>
          </select>
        </div>
        <div>
          <label className="inputLabel">
            Account Holder <span style={{ color: "red" }}>*</span>
          </label>
          <input
            className="input"
            type="text"
            required
            placeholder="account holder.."
            value={accountHolder}
            onChange={(e) => setAccountHolder(e.target.value)}
          />
        </div>
        <div>
          <label className="inputLabel">
            Account Number <span style={{ color: "red" }}>*</span>
          </label>
          <input
            className="input"
            type="number"
            required
            placeholder="account number.."
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          {accountNumberError && (
            <>
              <p className="errorPara">{accountNumberErrorMessage}</p>
            </>
          )}
        </div>
        <div>
          <label className="inputLabel">
            IFSC Code <span style={{ color: "red" }}>*</span>
          </label>
          <input
            className="input"
            type="text"
            required
            placeholder="ifsc code.."
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
          />
          {ifscCodeError && (
            <>
              <p className="errorPara">{ifscCodeErrorMessage}</p>
            </>
          )}
        </div>
        <button className="NetButton" type="submit">
          Proceed to Payment
        </button>

        {successAlert && (
          <div className="netAlertDiv">
            <Alert
              message="Congratulations "
              description="Now you are ready to pay with Netbanking"
              type="success"
              closable
              showIcon
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default NetBankingPayment;
