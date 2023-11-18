import { UncontrolledTooltip } from "reactstrap";
import PropTypes from "prop-types";

const AppTooltip = ({ text, id, position }) => (
  <>
    <UncontrolledTooltip placement={position ?? "top"} target={id}>
      {text}
    </UncontrolledTooltip>
  </>
);

AppTooltip.propTypes = {
  text: PropTypes.oneOfType([PropTypes.any, PropTypes.string, PropTypes.number])
    .isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  position: PropTypes.oneOf([
    "auto",
    "top",
    "bottom",
    "right",
    "left",
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "right-start",
    "right-end",
    "left-start",
    "left-end",
  ]),
};

export default AppTooltip;
