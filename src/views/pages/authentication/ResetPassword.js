// ** React Imports
import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

// ** Icons Imports
import { ChevronLeft } from "react-feather";

// ** Third Party Components
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

// ** Config
import jwtDefaultConfig from "../../../@core/auth/jwt/jwtDefaultConfig";

// ** Custom Components
import PasswordToggle from "@components/PasswordToggle";
import AppButton from "@components/Buttons";
import AppAlert from "@components/Alerts";

// ** Reactstrap Imports
import { Card, CardBody, CardText, Form } from "reactstrap";

// ** Styles
import "@styles/react/pages/page-authentication.scss";
import { resetPasswordValidations } from "./schemas/validations";

// ** Images
import source from "@assets/images/logo/logo.svg";

// ** Components
import PasswordChange from "./PasswordChange";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ResetPasswordBasic = () => {
  // ** States
  const [loading, setLoading] = useState(false);
  const [isPasswordChange, setIsPasswordChange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);

  // ** Query Params
  const [searchParams] = useSearchParams();
  const username = searchParams.get("userId");
  const code = searchParams.get("code");

  // ** Hooks
  const { control, handleSubmit } = useForm({
    mode: "onChange",
    // reValidateMode: "onBlur",
    resolver: yupResolver(resetPasswordValidations[0]),
  });
  const onSubmit = (data) => {
    setLoading(true);
    setIsOpen(false);
    let payload = {
      Code: code,
      UserName: username.toLowerCase(),
      Email: username.toLowerCase(),
      Password: data.password,
    };

    axios
      .post(
        `${jwtDefaultConfig.authBaseURL}${jwtDefaultConfig.changePasswordEndPoint}`,
        payload
      )
      .then(({ data }) => {
        setLoading(false);
        if (data.StatusCode === 400) {
          setIsOpen(true);
          setError(data.Data);
          return;
        } else if (data.IsSuccess) setIsPasswordChange(true);
        else {
          setIsOpen(true);
          setError(data.Data);
        }
      })
      .catch((err) => {
        setLoading(false);
        setIsOpen(true);
        setError(data.Data);
      });
  };

  return (
    <div className="auth-wrapper auth-basic px-2">
      <div className="auth-inner my-2">
        <Card className="mb-0">
          <CardBody>
            <Link className="brand-logo" to="/">
              <img className="img-fluid" src={source} alt="Demo Logo" />
            </Link>
            {error && (
              <>
                <AppAlert isOpen={isOpen} color="danger" timer={10000} className="mb-2">
                  {error}
                </AppAlert>
                <ForgotPasswordForm />
              </>
            )}
            {!error && <>
              {isPasswordChange ? (
                <PasswordChange />
              ) : (
                <>
                  <h3 style={{ fontWeight: 700 }}>Reset Password</h3>
                  <CardText>
                    for{" "}
                    <span className="text-primary">
                      {username ? username.toLowerCase() : ""}
                    </span>
                  </CardText>
                  <Form
                    className="auth-reset-password-form mt-2"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <PasswordToggle
                      label="New Password"
                      control={control}
                      name="password"
                      id="password"
                      // isClose={true}
                      // hideIcon={true}
                      showStandard={true}
                      placeholder="New Password"
                      required={true}
                      validCheck={true}
                    />
                    <PasswordToggle
                      label="Re-Enter New Password"
                      control={control}
                      name="confirmPassword"
                      id="confirmPassword"
                      // isClose={true}
                      // hideIcon={true}
                      showStandard={true}
                      placeholder="Re-Enter New Password"
                      required={true}
                      hint={"Passwords match"}
                      hintColor={"success"}
                      validCheck={true}
                    />
                    <AppButton
                      color="primary"
                      block
                      isSubmit
                      type="fill"
                      disabled={loading}
                      spinner={loading}
                      spinnerType="border"
                    >
                      Set New Password
                    </AppButton>
                  </Form>
                  <p className="text-center mt-2">
                    <Link to="/login">
                      <ChevronLeft className="rotate-rtl me-25" size={14} />
                      <span className="align-middle">Back to login</span>
                    </Link>
                  </p>
                </>
              )}
            </>}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ResetPasswordBasic;
