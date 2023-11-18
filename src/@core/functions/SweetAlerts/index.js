import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const handleConfirm = ({
  title,
  html,
  icon,
  cancelButtonText,
  confirmButtonText,
  allowOutsideClick,
  showCancelButton,
  confirmButtonClass,
  cancelButtonClass,
  callback,
  ...rest
}) => {
  const MySwal = withReactContent(Swal);

  return MySwal.fire({
    ...rest,
    title: title ?? "Discard Changes?",
    html:
      html ??
      "Are you sure you want to discard this draft? \nThis cannot be undone.",
    icon: icon ?? "warning",
    showCancelButton: showCancelButton ?? true,
    confirmButtonText: confirmButtonText ?? "Keep Editing",
    cancelButtonText: cancelButtonText ?? "Discard",
    allowOutsideClick: allowOutsideClick ?? false,
    customClass: {
      confirmButton: confirmButtonClass ?? "btn btn-secondary",
      cancelButton: cancelButtonClass ?? "btn btn-danger ms-1",
    },
    buttonsStyling: false,
  }).then(callback);
};
