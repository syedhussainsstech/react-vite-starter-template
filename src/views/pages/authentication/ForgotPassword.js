// ** React Imports
import { Link } from "react-router-dom";

// ** Reactstrap Imports
import { Card, CardBody } from "reactstrap";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

// ** Images
import source from "@assets/images/logo/logo.svg";

// ** Pages
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPasswordBasic = () => {

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
            <ForgotPasswordForm />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPasswordBasic;
