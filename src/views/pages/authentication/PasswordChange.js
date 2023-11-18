// ** React Imports
import { useNavigate } from "react-router-dom";

// ** Reactstrap Imports
import { CardText } from "reactstrap";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

import AppButton from "@components/Buttons";

const PasswordChange = () => {
  // ** States
  const navigate = useNavigate();

  return (
    <>
      <h3 style={{ fontWeight: 700 }}>Success!</h3>
      <CardText className="mb-3" style={{ wordSpacing: 1.5 }}>
        Your password has been reset. You can now log in using your new
        password. If you have any further questions or need assistance, please
        contact our support team. Thank you!
      </CardText>
      <AppButton
        color="primary"
        block
        type="fill"
        handleClick={() => navigate("/")}
      >
        Back to Log In
      </AppButton>
    </>
  );
};

export default PasswordChange;
