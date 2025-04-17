import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../shared/styles/login.css";
import GoogleAuth from "../../../shared/utils/GoogleAuth";
import useAuthStore from "../../../store/useAuthStore";

export default function Login() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const setUserId = useAuthStore((state) => state.setUser);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/api/v1/login`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        setUserId(formData.email);
        navigate("/otp");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(`${error.response.data.error}. Please try again`);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <h2>
          Welcome! <br /> Sign in to continue
        </h2>
        <form onSubmit={handleSubmit} className="login-container-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              required
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email or phone number"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              required
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="primary-button">
            Continue
          </button>
          <GoogleAuth />
          {/* <AppleAuth /> */}
        </form>
        <Link to="/password-reset">Forgot Password?</Link>
        <p>
          Need an account? <Link to="/register">Sign up</Link>
        </p>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}
