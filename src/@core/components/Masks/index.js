// ** Third Party Components
import { useState } from "react";
import PropTypes from "prop-types";
import { FormFeedback, InputGroupText, Label } from "reactstrap";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.us";
import { Controller } from "react-hook-form";
import classnames from "classnames";

const AppMask = ({
  label,
  control,
  errors,
  name,
  required,
  placeholder,
  id,
  options,
  icon,
  onChangeEvent,
  maxLength,
  value,
  inputRef,
  regionCode,
  floating,
  tooltip,
  isLimit,
  ...rest
}) => {
  const [defaultValue, setDefaultValue] = useState(value ?? "");

  function eventHandler(e) {
    setDefaultValue(e.target.value);
    if (onChangeEvent) onChangeEvent(e.target.value ?? null);
  }

  return (
    <div
      className={classnames({
        "mb-3": floating,
        "mb-1": !floating,
        "position-relative": tooltip,
      })}
    >
      {label && !floating ? (
        <Label htmlFor={id}>
          {label} {required ? <small className="text-danger">*</small> : null}
        </Label>
      ) : null}
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ?? false,
        }}
        defaultValue={defaultValue ?? ""}
        render={({ field, fieldState: { error } }) => (
          <>
            <div
              className={classnames({
                "input-group-merge": icon,
                "is-invalid": error,
                "form-floating": floating,
                "input-group": !floating,
                disabled: { ...rest }.disabled,
              })}
            >
              {icon ? (
                <InputGroupText className={error ? "text-danger" : ""}>
                  {icon}
                </InputGroupText>
              ) : null}
              {regionCode ? (
                <InputGroupText
                  className={classnames("text-secondary", {
                    "border-start-0 ps-0": icon,
                  })}
                >
                  {regionCode}
                </InputGroupText>
              ) : null}
              <Cleave
                {...rest}
                {...field}
                htmlRef={inputRef}
                id={id}
                className={classnames("form-control", {
                  "is-invalid": error,
                  "border-start-0 ps-0": regionCode,
                })}
                disabled={{ ...rest }.disabled}
                placeholder={placeholder}
                options={options}
                onChange={(event) => {
                  field.onChange(event);
                  eventHandler(event);
                }}
              />
              {floating ? (
                <Label htmlFor={name}>
                  {label}{" "}
                  {required ? <small className="text-danger">*</small> : null}
                </Label>
              ) : null}
            </div>
            {isLimit ? (
              <span className="textarea-counter-value float-end">
                {defaultValue.length}/{maxLength ?? 50}
              </span>
            ) : null}
          </>
        )}
      />
      {errors && (
        <FormFeedback tooltip={tooltip ?? false}>{errors.message}</FormFeedback>
      )}
    </div>
  );
};

AppMask.propTypes = {
  label: PropTypes.string,
  control: PropTypes.any.isRequired,
  errors: PropTypes.any,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.any.isRequired,
  icon: PropTypes.node,
  onChangeEvent: PropTypes.func,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inputRef: PropTypes.any,
  regionCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  floating: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tooltip: PropTypes.bool,
  isLimit: PropTypes.bool,
};

export default AppMask;
