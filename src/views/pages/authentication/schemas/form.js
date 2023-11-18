export const loginForm = {
  formId: "login",
  formField: {
    email: {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "test@test.com",
      errorMsg: "Email is required.",
      invalidMsg: "Your email is invalid."
    },
    password: {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "********",
      errorMsg: "Password is required.",
      invalidMsg: "Your password must match standard."
    },
    rememberMe: {
      name: "rememberMe",
      label: "Remember Me",
      type: "checkbox",
      errorMsg: "Field is required."
    }
  }
}

export const registerForm = {
  formId: "register",
  formField: {
    username: {
      name: "username",
      label: "Username",
      type: "username",
      placeholder: "Username",
      errorMsg: "Username is required.",
      invalidMsg: "Your username is invalid."
    },
    email: {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Email",
      errorMsg: "Email is required.",
      invalidMsg: "Your email is invalid."
    },
    password: {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "********",
      errorMsg: "Password is required.",
      invalidMsg: "Your password must match standard.",
    },
    terms: {
      name: "agree",
      label: "Agree",
      type: "checkbox",
      errorMsg: "Privacy policy and terms required."
    }
  }
}

export const resetPasswordForm = {
  formId: "reset-password",
  formField: {
    password: {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "********",
      errorMsg: "Password is required.",
      invalidMsg: "Your password must match standard.",
      minInvalidMsg: "Password must be at least 10 characters.",
      maxInvalidMsg: "Password length must not exceed 30 characters."
    },
    confirmPassword: {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "********",
      errorMsg: "Confirm Password is required.",
      minInvalidMsg: "Password must be at least 10 characters.",
      maxInvalidMsg: "Password length must not exceed 30 characters."
    }
  }
}

// export default form
