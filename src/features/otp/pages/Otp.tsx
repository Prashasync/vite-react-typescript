import React from "react";
import "../../../shared/styles/otp.css";
import EmailVerification from "../components/EmailVerification";
import useAuthStore from "../../../store/useAuthStore"
const Otp = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <div className="otp">
      <EmailVerification email={user}/>
    </div>
  );
};

export default Otp;
