import * as Yup from "yup";
import { loginForm, registerForm, resetPasswordForm } from "./form";
import { AppConstant } from "@utils";

export const loginValidations = [
  Yup.object().shape({
    [loginForm.formField.email.name]: Yup.string()
      .required(loginForm.formField.email.errorMsg)
      .matches(
        AppConstant.SingleEmailRegex,
        loginForm.formField.email.invalidMsg
      ),
    [loginForm.formField.password.name]: Yup.string()
      .required(loginForm.formField.password.errorMsg)
      .min(6, loginForm.formField.password.invalidMsg),
    // .matches(
    //   AppConstant.PasswordRegex,
    //   loginForm.formField.password.invalidMsg
    // ),
    // [loginForm.formField.rememberMe.name]: Yup.bool()
    //   .oneOf([true], loginForm.formField.rememberMe.errorMsg)
    //   .required(loginForm.formField.rememberMe.errorMsg)
    //   .typeError("Field is required."),
  }),
];

export const registerValidations = [
  Yup.object().shape({
    [registerForm.formField.username.name]: Yup.string().required(
      registerForm.formField.username.errorMsg
    ),
    [registerForm.formField.email.name]: Yup.string()
      .required(registerForm.formField.email.errorMsg)
      .matches(
        AppConstant.SingleEmailRegex,
        registerForm.formField.email.invalidMsg
      ),
    [registerForm.formField.password.name]: Yup.string()
      .required(registerForm.formField.password.errorMsg)
      .min(8, registerForm.formField.password.invalidMsg)
      .matches(
        AppConstant.PasswordRegex,
        registerForm.formField.password.invalidMsg
      ),
    [registerForm.formField.terms.name]: Yup.bool()
      .oneOf([true], registerForm.formField.terms.errorMsg)
      .required(registerForm.formField.terms.errorMsg)
      .typeError("Field is required."),
  }),
];

export const resetPasswordValidations = [
  Yup.object().shape({
    [resetPasswordForm.formField.password.name]: Yup.string()
      .required("Password is required")
      .min(10, resetPasswordForm.formField.password.minInvalidMsg)
      .max(30, resetPasswordForm.formField.password.maxInvalidMsg)
      .matches(
        AppConstant.PasswordRegex,
        registerForm.formField.password.invalidMsg
      ),
    [resetPasswordForm.formField.confirmPassword.name]: Yup.string()
      .required("Password is required")
      .min(10, resetPasswordForm.formField.password.minInvalidMsg)
      .max(30, resetPasswordForm.formField.password.maxInvalidMsg)
      .oneOf([Yup.ref("password"), null], "Passwords do not match"),
  }),
];

export const forgotPasswordValidations = [
  Yup.object().shape({
    [loginForm.formField.email.name]: Yup.string()
      .required(loginForm.formField.email.errorMsg)
      .matches(
        AppConstant.SingleEmailRegex,
        loginForm.formField.email.invalidMsg
      ),
  }),
];
