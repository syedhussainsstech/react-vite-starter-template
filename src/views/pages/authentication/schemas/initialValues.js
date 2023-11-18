import { loginForm } from "./form"

const {
  formField: { email, password }
} = loginForm

const initialValues = {
  [email.name]: "",
  [password.name]: ""
}

export default initialValues
