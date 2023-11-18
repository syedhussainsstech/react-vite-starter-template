// ** React Imports
import { useState } from "react";

// ** Reactstrap Imports
import { CardText, Spinner } from "reactstrap";

// ** Config
import jwtDefaultConfig from "../../../@core/auth/jwt/jwtDefaultConfig";

// ** Third Party Components
import toast from "react-hot-toast";
import axios from "axios";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

const VerifyEmailBasic = ({ email }) => {
  // ** States
  const [loading, setLoading] = useState(false);

  // ** Resend Event Handler
  const resendHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .get(
        `${jwtDefaultConfig.authBaseURL}${jwtDefaultConfig.forgotPasswordEndPoint}/${email}`
      )
      .then(() => {
        toast.success("Email has been resent successfully!", {
          duration: 5000,
          position: "top-center",
        });
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Some errror", {
          duration: 5000,
          position: "top-center",
        });
        setLoading(false);
      });
  };

  return (
    <>
      <h3 style={{ fontWeight: 700 }}>Check your email</h3>
      <CardText className="mb-2">
        An email with a link to reset your password was sent to{" "}
        <span className="fw-bolder text-primary">{email}</span>. If you don’t
        receive an email soon, please check your spam folder or contact our
        support team.
      </CardText>
      <p className="text-center mt-2">
        <span>Didn't get the mail? </span>
        <a href="/" onClick={resendHandler}>
          {loading ? (
            <Spinner type={"border"} color={"primary"} size={"sm"} />
          ) : (
            <span>Resend</span>
          )}
        </a>
      </p>
    </>
  );
};

export default VerifyEmailBasic;
