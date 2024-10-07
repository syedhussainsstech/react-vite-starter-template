import { PopoverBody, PopoverHeader, UncontrolledPopover } from "reactstrap"
import PropTypes from "prop-types"

const AppPopover = ({
  children,
  id,
  position,
  heading,
  body,
  trigger
}) => {
  return (
    <>
      <UncontrolledPopover
        placement={position ?? "top"}
        target={id}
        trigger={trigger}
      >
        {children ? (
          children
        ) : (
          <>
            <PopoverHeader>{heading}</PopoverHeader>
            <PopoverBody>{body}</PopoverBody>
          </>
        )}
      </UncontrolledPopover>
    </>
  )
}

AppPopover.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  position: PropTypes.oneOf(["auto", "top", "bottom", "right", "left", "top-start", "top-end", "bottom-start", "bottom-end", "right-start", "right-end", "left-start", "left-end"]),
  heading: PropTypes.string,
  body: PropTypes.node,
  trigger: PropTypes.string
}

export default AppPopover