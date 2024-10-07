import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import PropTypes from "prop-types";
import classNames from "classnames";

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
  className
}) => {
  return (
    <Modal
      toggle={close}
      isOpen={open}
      size={size}
      modalClassName={classNames(`modal-${type} ${className}`,)}
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
  size: PropTypes.oneOf(["sm", "lg", "xl"]),
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
  className: PropTypes.string
};

export default AppModals;
