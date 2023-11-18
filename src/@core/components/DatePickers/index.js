// ** Third Components
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { FormFeedback, InputGroup, Label, InputGroupText } from "reactstrap";
import Flatpickr from "react-flatpickr";
import classNames from "classnames";

// Flat picker styles
import "../../../@core/scss/react/libs/flatpickr/flatpickr.scss";

// ** Icons
import { Calendar, Clock } from "react-feather";

const AppDatePicker = ({
  label,
  onChange,
  onKeyPress,
  onKeyUp,
  name,
  required,
  icon,
  noCalendar,
  id,
  enableTime,
  control,
  minDate,
  maxDate,
  formatDate,
  value,
  error,
  tooltip,
  ...rest
}) => {
  return (
    <div className="mb-1">
      {label ? (
        <Label>
          {label} {required ? <small className="text-danger">*</small> : null}
        </Label>
      ) : null}
      <InputGroup
        className={classNames("input-group-merge", {
          "is-invalid": error,
        })}
        style={{ zIndex: 2 }}
      >
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Flatpickr
              {...rest}
              {...field}
              className="form-control flatpickr-input"
              onChange={(value) => {
                field.onChange(value); // update form value
                if (onChange) {
                  onChange(value); // call additional handler
                }
              }}
              options={{
                dateFormat: formatDate ?? "Y-m-d",
                minDate: minDate ?? undefined,
                maxDate: maxDate ?? undefined,
                enableTime: enableTime ?? false,
                noCalendar: noCalendar ?? false,
              }}
            />
          )}
        />
        <InputGroupText
          className="border-start-0"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            zIndex: -1,
            paddingRight: 10,
          }}
        >
          {enableTime ? (
            <Clock size="16" color="#bfbfc0" />
          ) : (
            <Calendar size="15" color="#bfbfc0" />
          )}
        </InputGroupText>
      </InputGroup>
      {error && (
        <FormFeedback tooltip={tooltip ?? false}>{error.message}</FormFeedback>
      )}
    </div>
  );
};

// ** PropTypes
AppDatePicker.propTypes = {
  label: PropTypes.string,
  onChangeEvent: PropTypes.func,
  onKeyPressEvent: PropTypes.func,
  onKeyUpEvent: PropTypes.func,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.any,
  icon: PropTypes.node,
  noCalendar: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  enableTime: PropTypes.bool,
  control: PropTypes.any.isRequired,
  minDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  formatDate: PropTypes.oneOfType([PropTypes.string]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tooltip: PropTypes.bool,
};

export default AppDatePicker;
