import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap"
import PropTypes from "prop-types"

const AppOffCanvas = ({
  open,
  setOpen,
  title,
  children,
  animate,
  backdrop,
  keyboard,
  onClosed,
  onOpened,
  unmountOnClose,
  scroll,
  direction,
  className,
  style,
}) => {
  return (
    <Offcanvas
      toggle={() => setOpen(!open)}
      isOpen={open}
      keyboard={keyboard ?? true}
      backdrop={backdrop ?? true}
      fade={animate ?? true}
      onOpened={onOpened ?? undefined}
      onClosed={onClosed ?? undefined}
      unmountOnClose={unmountOnClose}
      scrollable={scroll ?? false}
      direction={direction}
      style={style}
      className={className}
    >
      <OffcanvasHeader toggle={() => setOpen(!open)}>{title}</OffcanvasHeader>
      <OffcanvasBody>{children}</OffcanvasBody>
    </Offcanvas>
  )
}

AppOffCanvas.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  animate: PropTypes.bool,
  backdrop: PropTypes.oneOf([PropTypes.bool, "static"]),
  keyboard: PropTypes.bool,
  onClosed: PropTypes.func,
  onOpened: PropTypes.func,
  unmountOnClose: PropTypes.bool,
  scroll: PropTypes.bool,
  direction: PropTypes.oneOf(["start", "end", "bottom", "top"]),
  style: PropTypes.oneOf([PropTypes.object, PropTypes.string])
}

export default AppOffCanvas
