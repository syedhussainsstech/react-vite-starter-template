// ** Third Components
import PropTypes from "prop-types";
import { AlertTriangle, Check, Info, X } from "react-feather";

// ** Custom Component
import AppBadge from "@components/Badges";

const CustomToast = ({ type, icon, text, close }) => {
  return (
    <div className="w-100 d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center me-1">
        {icon && (
          <AppBadge color={type} light className="toast-badge">
            {type === "info" && <Info />}
            {type === "warning" && <AlertTriangle />}
            {type === "success" && <Check />}
            {type === "danger" && <AlertTriangle />}
          </AppBadge>
        )}
        <div className="ms-75">{text}</div>
      </div>
      {close && <X size="18" onClick={close} style={{ cursor: "pointer" }} />}
    </div>
  );
};

CustomToast.propTypes = {
  type: PropTypes.oneOf(["warning", "success", "info", "danger"]).isRequired,
  icon: PropTypes.bool,
  text: PropTypes.string,
  close: PropTypes.func,
};

export default CustomToast;
