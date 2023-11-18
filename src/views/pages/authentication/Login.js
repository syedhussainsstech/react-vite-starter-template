// ** React Imports
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// ** Custom Hooks
import JwtService from "@src/@core/auth/jwt/jwtService";

// ** Third Party Components
import { yupResolver } from "@hookform/resolvers/yup";
// import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
// import { Coffee, X } from "react-feather";

// ** Actions
import { handleLogin } from "@store/authentication";

// ** Context
import { AbilityContext } from "@src/utility/context/Can";

// ** Custom Components
import Avatar from "@components/Avatar";
import AppButton from "@components/Buttons";
import PasswordToggle from "@components/PasswordToggle";
import AppInput from "@components/Inputs";
import AppAlert from "@components/Alerts";
import AppCheckbox from "@components/CheckBox";

// ** Utils
import { getHomeRouteForLoggedInUser } from "@utils";

// ** Images
import source from "@assets/images/logo/logo.svg";

// ** Reactstrap Imports
import { Form, Card, CardBody } from "reactstrap";

// ** Styles
import "@styles/react/pages/page-authentication.scss";
import { loginValidations } from "./schemas/validations";

// const ToastContent = ({ t, name, role }) => {
//   return (
//     <div className="d-flex">
//       <div className="me-1">
//         <Avatar size="sm" color="success" icon={<Coffee size={12} />} />
//       </div>
//       <div className="d-flex flex-column">
//         <div className="d-flex justify-content-between">
//           <h6>{name}</h6>
//           <X
//             size={12}
//             className="cursor-pointer"
//             onClick={() => toast.dismiss(t.id)}
//           />
//         </div>
//         <span>
//           You have successfully logged in as an {role} user to Demo. Now
//           you can start to explore. Enjoy!
//         </span>
//       </div>
//     </div>
//   );
// };

// const defaultValues = {
//   password: "Welcome@123",
//   email: "syed.hussain@sstech.us",
//   rememberMe: false,
// };

const Login = () => {
  // ** States
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  // ** Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ability = useContext(AbilityContext);

  // ** Hooks
  const { control, handleSubmit, setValue, reset } = useForm({
    // defaultValues: defaultValues,
    resolver: yupResolver(loginValidations[0]),
  });

  // Remember me check
  useEffect(() => {
    // let credentials = localStorage.getItem("UserCredential")
    // if(credentials) {
    //   let value = JSON.parse(credentials)
    //   reset(value)
    // }
    reset({
      email: 'syed.hussain@sstech.us',
      password: 'Welcome@123'
    })
  }, [])

  // '{"userData":{"id":1,"fullName":"John Doe","username":"johndoe","avatar":"/src/11.jpg","email":"admin@demo.com",
  // "role":"admin", // "ability":[{"action":"manage","subject":"all"}],"extras":{"eCommerceCartItemsCount":5}},
  // "accessToken":"eyJhbGciOiJIU","refreshToken":"eyJhbGciOiJIU"}'

  const onSubmit = (result) => {
    setLoading(true);
    setIsOpen(false);
    setError("");
    let service = new JwtService();
    service
      .login({ Username: result.email, Password: result.password })
      .then((res) => {
        if (typeof res.data === "string") {
          setLoading(false);
          setIsOpen(true);
          setError(res.data);
        } else {
          if (result.rememberMe) {
            let payload = result;
            delete payload.rememberMe;
            localStorage.setItem("UserCredential", JSON.stringify(payload));
          }
          const data = {
            userData: {
              email: res.data.Email.toLowerCase(),
              username: res.data.FullName,
              id: 1,
              role: res.data.Role.toLowerCase(),
              fullName: res.data.FullName,
              ability: [{ action: "manage", subject: "all" }],
            },
            accessToken: res.data.AuthToken,
            refreshToken: res.data.RefreshToken,
          };
          dispatch(handleLogin(data));
          setLoading(false);
          ability.update(data.userData.ability);
          navigate(getHomeRouteForLoggedInUser(data.userData.role));
          // toast((t) => (
          //   <ToastContent
          //     t={t}
          //     role={data.userData.role || "admin"}
          //     name={
          //       data.userData.fullName || data.userData.username || "John Doe"
          //     }
          //   />
          // ));
        }
      })
      .catch((error) => {
        setLoading(false);
        setIsOpen(true);
        setError(error.response.data.Message);
      });
  };

  return (
    <div className="auth-wrapper auth-basic px-2">
      <div className="auth-inner my-2">
        <Card className="mb-0">
          <CardBody>
            <Link
              id="brand-logo-id"
              className="brand-logo"
              to="/"
              onClick={(e) => e.preventDefault()}
            >
              <img className="img-fluid" src={source} alt="Demo Logo" />
            </Link>
            {error && (
              <AppAlert isOpen={isOpen} color="danger" timer={5000} className="mb-2">
                {error}
              </AppAlert>
            )}
            <Form
              className="auth-login-form mt-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <AppInput
                type="email"
                label="Email Address"
                control={control}
                value=""
                id="email"
                name="email"
                placeholder="Email Address"
                required={true}
              />
              <div>
                <PasswordToggle
                  label="Password"
                  control={control}
                  name="password"
                  id="password"
                  // isClose={true}
                  // hideIcon={true}
                  // showStandard={true}
                  placeholder="Password"
                  required={true}
                />
              </div>
              <div className="mt-n2">
                <div className="float-end">
                  <Link to="/forgot-password" id="forgot-password-link-id">
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <AppCheckbox
                  id="rememberMe"
                  control={control}
                  name="rememberMe"
                  setValue={setValue}
                  checkboxLabel="Remember Me"
                  checked={true}
                  // color="warning"
                  // isSwitch={true}
                  // isSwitchIcon={true}
                  inline={true}
                  required={true}
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
                id="login-submit-button"
              >
                Sign in
              </AppButton>
            </Form>
            {/* <p className="text-center mt-2">
              <span className="me-25">New on our platform?</span>
              <Link to="/register">
                <span>Create an account</span>
              </Link>
            </p> */}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Login;
