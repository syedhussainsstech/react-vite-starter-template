// ** Reactstrap Imports
import { useState } from "react";
import { Link } from "react-router-dom";

// ** Third Party Components
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { CardText, Form } from "reactstrap";

// ** Config
import jwtDefaultConfig from "../../../@core/auth/jwt/jwtDefaultConfig";

// ** Custom Components
import AppInput from "@components/Inputs";
import AppButton from "@components/Buttons";
import AppAlert from "@components/Alerts";

// ** Pages
import VerifyEmailBasic from "./VerifyEmail";

// ** Icons Imports
import { ChevronLeft } from "react-feather";

// ** Validations
import { forgotPasswordValidations } from "./schemas/validations";

const defaultValues = { email: "" };

const ForgotPasswordForm = () => {
  // ** States
  const [isEmailVerify, setIsEmailVerify] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setAlertError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // ** Hooks
  const {
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(forgotPasswordValidations[0]),
  });

  // ** Submit Handler
  const onSubmit = (data) => {
    setLoading(true);

    axios
      .get(
        `${jwtDefaultConfig.authBaseURL}${jwtDefaultConfig.forgotPasswordEndPoint}/${data.email}`
      )
      .then(({ data }) => {
        if (!data.IsSuccess) {
          setLoading(false);
          setError("email", {
            message: data.Data,
          });
          return;
        }

        setIsEmailVerify(true);
        setLoading(false);
      })
      .catch((err) => {
        setIsOpen(true)
        setAlertError(err.response.data.Message)
        setLoading(false)
      });
  };

  return (
    <>
      {isEmailVerify ? (
        <VerifyEmailBasic {...watch()} />
      ) : (
        <>
          {error && (
            <>
              <AppAlert isOpen={isOpen} color="danger" className="mb-2">
                {error}
              </AppAlert>
            </>
          )}
          <Form
            className="auth-login-form mt-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 style={{ fontWeight: 700 }}>Forgot Password?</h3>
            <CardText className="mb-2">
              Please enter the email associated with your account and we'll send
              a link to reset it.
            </CardText>
            <div className="mt-n2">
              <AppInput
                autofocus
                type="email"
                label="Email Address"
                control={control}
                value=""
                id="email"
                name="email"
                errors={errors}
                placeholder="Email Address"
                required={true}
                // hint={hint}
              />
            </div>
            <AppButton
              color="primary"
              block
              isSubmit
              type="fill"
              disabled={loading}
              spinner={loading}
              spinnerType="border"
              id="forgot-password-submit-button"
            >
              Send Reset Link
            </AppButton>
          </Form>
          <p className="text-center mt-2">
            <Link to="/login" id="back-to-login-from-forgot-id">
              <ChevronLeft className="rotate-rtl me-25" size={14} />
              <span className="align-middle">Back to login</span>
            </Link>
          </p>
        </>
      )}
    </>
  );
};

export default ForgotPasswordForm;
