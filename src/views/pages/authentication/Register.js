// ** React Imports
import { Link } from "react-router-dom"

// ** Third Party Components
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

// ** Custom Components
import PasswordToggle from "@components/PasswordToggle"
import AppInput from "@components/Inputs"
import AppCheckbox from "@components/CheckBox"

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Button, Form } from "reactstrap"

// ** Styles
import "@styles/react/pages/page-authentication.scss"
// ** Validations
import { registerValidations } from "./schemas/validations"

const defaultValues = {
  email: "",
  terms: false,
  username: "",
  password: ""
}

const RegisterBasic = () => {
  // ** Hooks
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(registerValidations[0])
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="auth-wrapper auth-basic px-2">
      <div className="auth-inner my-2">
        <Card className="mb-0">
          <CardBody>
            <Link
              className="brand-logo"
              to="/"
              onClick={(e) => e.preventDefault()}
            >
              <h2 className="brand-text text-primary ms-1">Demo App</h2>
            </Link>
            <CardTitle tag="h4" className="mb-1">
              Adventure starts here 🚀
            </CardTitle>
            <CardText className="mb-2">
              Make your app management easy and fun!
            </CardText>
            <Form
              className="auth-register-form mt-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-1">
                <AppInput
                  type="username"
                  label="Username"
                  control={control}
                  value=""
                  id="username"
                  name="username"
                  placeholder="Username"
                  required={true}
                />
              </div>
              <div className="mb-1">
                <AppInput
                  type="email"
                  label="Email"
                  control={control}
                  value=""
                  id="email"
                  name="email"
                  placeholder="Email"
                  required={true}
                />
              </div>
              <div className="mb-1">
                <PasswordToggle
                  label="Password"
                  control={control}
                  name="password"
                  id="password"
                  // isClose={true}
                  // hideIcon={true}
                  showStandard={true}
                  placeholder="*******"
                  required={true}
                />
              </div>
              <AppCheckbox
                id="agree"
                control={control}
                name="agree"
                setValue={setValue}
                checkboxLabel={
                  <>
                    I agree to
                    <a
                      className="ms-25"
                      href="/"
                      onClick={(e) => e.preventDefault()}
                    >
                      privacy policy & terms
                    </a>
                  </>
                }
                // color="warning"
                // isSwitch={true}
                // isSwitchIcon={true}
                inline={true}
                required={true}
              />
              <Button color="primary" block>
                Sign up
              </Button>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">Already have an account?</span>
              <Link to="/login">
                <span>Sign in instead</span>
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default RegisterBasic
