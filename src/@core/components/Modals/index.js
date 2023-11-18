import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import PropTypes from "prop-types";

const AppModals = ({
  open,
  close,
  title,
  children,
  footer,
  size,
  type,
  fullscreen,
  animate,
  center,
  backdrop,
  keyboard,
  onClosed,
  onOpened,
  unmountOnClose,
  headerClass,
}) => {
  return (
    <Modal
      toggle={close}
      isOpen={open}
      size={size}
      modalClassName={`modal-${type}`}
      fullscreen={fullscreen ?? false}
      centered={center ?? false}
      keyboard={keyboard ?? true}
      backdrop={backdrop ?? true}
      fade={animate ?? true}
      onOpened={onOpened ?? undefined}
      onClosed={onClosed ?? undefined}
      unmountOnClose={unmountOnClose}
    >
      <ModalHeader className={headerClass} toggle={close}>
        {title}
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
      {footer ? <ModalFooter>{footer}</ModalFooter> : null}
    </Modal>
  );
};

AppModals.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  size: PropTypes.oneOf(["sm", "lg"]),
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "success",
    "info",
    "danger",
    "dark",
    "light",
  ]),
  fullscreen: PropTypes.bool,
  animate: PropTypes.bool,
  center: PropTypes.bool,
  backdrop: PropTypes.oneOf([PropTypes.bool, "static"]),
  keyboard: PropTypes.bool,
  onClosed: PropTypes.func,
  onOpened: PropTypes.func,
  unmountOnClose: PropTypes.bool,
  headerClass: PropTypes.string,
  close: PropTypes.func,
};

export default AppModals;
