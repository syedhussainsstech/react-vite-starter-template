import { Progress } from "reactstrap"
import PropTypes from "prop-types"

const AppProgress = ({
  animated,
  striped,
  value,
  color,
  label
}) => {
  return (
    <Progress animated={animated} striped={striped} value={value} color={color}>
      {label}
    </Progress>
  )
}

AppProgress.propTypes = {
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOf(["primary", "secondary", "warning", "success", "info", "danger", "dark", "light"]),
  label: PropTypes.any
}

export default AppProgress