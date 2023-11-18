// ** Reactstrap Imports
import { useState, useEffect } from "react"
import { Toast, ToastBody, ToastHeader } from "reactstrap"
import PropTypes from "prop-types"

const AppToasts = ({
  heading,
  children,
  color,
  toggle,
  timer,
  icon,
  isOpen
}) => {
  // ** State
  const [visible, setVisible] = useState(isOpen)

  // ** Toggle
  useEffect(() => {
    setVisible(isOpen)
    if (timer && isOpen) {
      const _setTime = setTimeout(() => {
        setVisible(!visible)
        if (toggle) toggle(false)
      }, timer)

      return () => {
        clearTimeout(_setTime)
      }
    }
  }, [isOpen, visible, timer, toggle])

  // ** Toggle Event
  const toggleAlert = () => {
    if (toggle) toggle(false)
  }

  return (
    <Toast isOpen={visible} fade>
      <ToastHeader toggle={toggle ? toggleAlert : undefined} icon={icon ? color : null}>{heading}</ToastHeader>
      <ToastBody>{children}</ToastBody>
    </Toast>
  )
}

AppToasts.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["primary", "secondary", "warning", "success", "info", "danger", "dark", "light"]).isRequired,
  toggle: PropTypes.func.isRequired,
  timer: PropTypes.number,
  icon: PropTypes.any,
  isOpen: PropTypes.bool.isRequired
}

export default AppToasts