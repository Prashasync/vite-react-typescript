import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailVerification = ({ setShowOtp, email }) => {
  const [message, setMessage] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/api/v/verify`,
        { email, otp },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        navigate("/onboarding");
      } else {
        setMessage(response.data.error.message);
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      setMessage("An error occurred while verifying the email.");
    }
  };

  return (
    <div className="email-verification">
      {isVerified ? (
        <p>Email successfully verified!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Email Verification</h2>
          <p>Please enter the OTP sent to your email:</p>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter OTP"
            maxLength="6"
          />
          <button type="submit">Verify</button>
          {message && <p style={{ color: "red" }}>{message}</p>}
        </form>
      )}
    </div>
  );
};

export default EmailVerification;
