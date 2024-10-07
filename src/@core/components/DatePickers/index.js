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
import { getDate, getDay } from "date-fns";

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
  disabled,
  disabledDay,
  mode = 'single',
  whiteBackground,
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
              disabled={disabled}
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
                ...(mode && { mode: mode }),
                dateFormat: formatDate ?? "Y-m-d",
                minDate: minDate ?? undefined,
                maxDate: maxDate ?? undefined,
                enableTime: enableTime ?? false,
                noCalendar: noCalendar ?? false,
                disable: [function(date) {
                  return getDay(date) === disabledDay
                }]
              }}
              style={{
                border: "1px solid #d8d6de",
                borderRadius: "0.357rem",
                ...(disabled
                  ? { backgroundColor: "#efefef", cursor: "not-allowed" }
                  : {}),
                ...(whiteBackground ? { "backgroundColor": "#fff" } : {}),  
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
            //zIndex: -1,
            paddingRight: 10,
            ...(disabled
              ? {
                backgroundColor: "#efefef",
                zIndex: 1,
              }
              : {}),
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
  mode: PropTypes.oneOf(['single', 'range', 'multiple', 'time']),
  label: PropTypes.string,
  onChangeEvent: PropTypes.func,
  onKeyPressEvent: PropTypes.func,
  onKeyUpEvent: PropTypes.func,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.any,
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
  disabledDay: PropTypes.number
};

export default AppDatePicker;
