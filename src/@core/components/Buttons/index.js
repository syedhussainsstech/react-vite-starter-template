// ** React Imports
import { forwardRef } from 'react'
import { Button, Spinner } from "reactstrap"

// ** Third Party Components
import PropTypes from 'prop-types'

const AppButton = forwardRef((props, ref) => {
  // ** Props
  const {
    type,
    color,
    size,
    block,
    outline,
    round,
    isSubmit,
    disabled,
    icon,
    handleClick,
    children,
    spinner,
    spinnerColor,
    spinnerSize,
    spinnerType,
    ...rest
  } = props
  return (

    <Button.Ripple
      ret={ref}
      color={
        type === "flat"
          ? `flat-${color}`
          : type === "gradient"
            ? `gradient-${color}`
            : type === "relief"
              ? `relief-${color}`
              : color
      }
      size={size ?? "md"}
      block={block ?? false}
      outline={outline ?? false}
      className={`${round ? "round" : ""} ${icon ? "btn-icon" : ""}`}
      type={isSubmit ? "submit" : "button"}
      disabled={disabled ?? false}
      onClick={handleClick ?? null}
      {...rest}
    >
      {spinner ? (
        <Spinner
          type={spinnerType ?? "border"}
          color={spinnerColor ?? "light"}
          size={spinnerSize ?? size ?? "sm"}
        />
      ) : (
        children
      )}
    </Button.Ripple>
  )
})

export default AppButton

// ** PropTypes
AppButton.propTypes = {
  type: PropTypes.oneOf(["fill", "outline", "flat", "gradient", "relief"]),
  color: PropTypes.oneOf(["primary", "secondary", "warning", "success", "info", "danger", "dark", "light"]).isRequired,
  size: PropTypes.oneOf(["sm", "lg", "md"]),
  block: PropTypes.bool,
  outline: PropTypes.bool,
  round: PropTypes.bool,
  isSubmit: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.bool,
  handleClick: PropTypes.func,
  children: PropTypes.node,
  spinner: PropTypes.bool,
  spinnerColor: PropTypes.oneOf(["primary", "secondary", "warning", "success", "info", "danger", "dark", "light"]),
  spinnerSize: PropTypes.oneOf(["sm"]),
  spinnerType: PropTypes.oneOf(["grow", "border"])
}

// ** Default Props
AppButton.defaultProps = {
  type: "fill",
  color: "primary"
}
