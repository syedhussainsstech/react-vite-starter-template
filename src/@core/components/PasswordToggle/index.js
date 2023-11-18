// ** React Imports
import { useState, forwardRef } from "react";
import { Controller } from "react-hook-form";

// ** Third Party Components
import PropTypes from "prop-types";
import classnames from "classnames";
import { Check, Eye, EyeOff, X } from "react-feather";

// ** Reactstrap Imports
import {
  InputGroup,
  Input,
  InputGroupText,
  Label,
  FormFeedback,
} from "reactstrap";

// ** Password Standard SCSS
import "./password-standard.scss";

const PasswordToggle = forwardRef((props, ref) => {
  // ** Props
  const {
    label,
    hideIcon,
    showIcon,
    showStandard,
    name,
    required,
    icon,
    id,
    placeholder,
    iconSize,
    inputClassName,
    isClose,
    control,
    tooltip,
    validCheck,
    hint,
    hintColor,
    ...rest
  } = props;

  // ** State
  const [inputVisibility, setInputVisibility] = useState(false);
  const [show, setShow] = useState(false);
  const [cancel, setCancel] = useState(false);

  // ** Renders Icon Based On Visibility
  const renderIcon = () => {
    const size = iconSize ? iconSize : 14;

    if (inputVisibility === false) {
      return hideIcon ? (
        hideIcon
      ) : (
        <>
          <Eye size={size} />
          {isClose && cancel ? <X size={size} className="ms-1" /> : null}
        </>
      );
    } else {
      return showIcon ? (
        showIcon
      ) : (
        <>
          <EyeOff size={size} />
          {isClose && cancel ? <X size={size} className="ms-1" /> : null}
        </>
      );
    }
  };

  // Password Standard Validation
  const passwordCheck = (value) => {
    if (!value) return;
    const lowerRegex = /[a-z]/g;
    const upperRegex = /[A-Z]/g;
    const numberRegex = /[0-9]/g;
    const specialRegex = /\W|_/g;
    const checkValidation = {
      lower: false,
      upper: false,
      number: false,
      special: false,
      min: false,
      max: false,
    };
    if (value.match(lowerRegex)) checkValidation.lower = true;
    if (value.match(upperRegex)) checkValidation.upper = true;
    if (value.match(numberRegex)) checkValidation.number = true;
    if (value.match(specialRegex)) checkValidation.special = true;
    if (value.length >= 10) checkValidation.min = true;
    if (value.length <= 30) checkValidation.max = true;

    // Check if all criteria are met
    if (
      checkValidation.lower &&
      checkValidation.upper &&
      checkValidation.number &&
      checkValidation.special &&
      checkValidation.min &&
      checkValidation.max
    ) {
      return null; // Return null if all criteria are met
    }

    return (
      <div className="password-standard" ref={ref}>
        <ul className="nav flex-column">
          <li className="nav-item">
            {checkValidation.lower ? (
              <Check size="14" color="#84C666" />
            ) : (
              <X size="14" color="#FA4858" />
            )}
            <span>One lowercase character</span>
          </li>
          <li className="nav-item">
            {checkValidation.upper ? (
              <Check size="14" color="#84C666" />
            ) : (
              <X size="14" color="#FA4858" />
            )}
            <span>One uppercase character</span>
          </li>
          <li className="nav-item">
            {checkValidation.number ? (
              <Check size="14" color="#84C666" />
            ) : (
              <X size="14" color="#FA4858" />
            )}
            <span>One number</span>
          </li>
          <li className="nav-item">
            {checkValidation.special ? (
              <Check size="14" color="#84C666" />
            ) : (
              <X size="14" color="#FA4858" />
            )}
            <span>1 special character (ex. !@#$%)</span>
          </li>
          <li className="nav-item">
            {checkValidation.min ? (
              <Check size="14" color="#84C666" />
            ) : (
              <X size="14" color="#FA4858" />
            )}
            <span>10 characters minimum</span>
          </li>
          <li className="nav-item">
            {checkValidation.max ? (
              <Check size="14" color="#84C666" />
            ) : (
              <X size="14" color="#FA4858" />
            )}
            <span>30 characters maximum</span>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <Controller
        render={({
          field,
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <div
            className={classnames("mb-1", {
              "position-relative": tooltip,
            })}
          >
            {label ? (
              <Label htmlFor={id} style={{ fontWeight: 500 }}>
                {label}{" "}
                {required ? <small className="text-danger">*</small> : null}
              </Label>
            ) : null}
            <InputGroup
              className={classnames("input-group-merge", {
                "is-invalid": error,
              })}
            >
              {icon ? (
                <InputGroupText
                  className={classnames("border-end-0", {
                    "text-danger": error,
                  })}
                >
                  {icon}
                </InputGroupText>
              ) : null}
              <Input
                {...field}
                {...rest}
                type={!inputVisibility ? "password" : "text"}
                invalid={(isTouched || isDirty || error) && invalid}
                valid={validCheck && isTouched && isDirty && !error && !invalid}
                placeholder={placeholder ? placeholder : "********"}
                className={inputClassName}
                id={id}
                onKeyUp={(e) => {
                  e.target.value !== "" ? setShow(true) : setShow(false);
                  setCancel(true);
                }}
                onBlur={() => {
                  field.onBlur();
                  setShow(false);
                  field.value === "" || field.value === null
                    ? setCancel(false)
                    : setCancel(true);
                }}
                /*eslint-disable */
                // {...(label && htmlFor
                //   ? {
                //       id: htmlFor,
                //     }
                //   : {})}
                /*eslint-enable */
              />
              <InputGroupText
                className={
                  validCheck && isTouched && isDirty && !error && !invalid
                    ? "cursor-pointer ps-25 border-success"
                    : "cursor-pointer ps-25"
                }
                onClick={() => setInputVisibility(!inputVisibility)}
              >
                {renderIcon()}
              </InputGroupText>
              {showStandard && show ? passwordCheck(field.value) : null}
            </InputGroup>
            {hint && isTouched && isDirty && !error && !invalid ? (
              <small className={hintColor ? `text-${hintColor}` : "text-muted"}>
                {hint}
              </small>
            ) : null}
            {error && (
              <FormFeedback tooltip={tooltip ?? false}>
                {error.message}
              </FormFeedback>
            )}
          </div>
        )}
        name={name}
        control={control}
        rules={{
          required: required ?? false,
        }}
        defaultValue={""}
      />
    </>
  );
});

export default PasswordToggle;

// ** PropTypes
PasswordToggle.propTypes = {
  showStandard: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool,
  icon: PropTypes.node,
  id: PropTypes.string,
  isClose: PropTypes.bool,
  control: PropTypes.any,
  tooltip: PropTypes.bool,
  invalid: PropTypes.bool,
  hideIcon: PropTypes.node,
  showIcon: PropTypes.node,
  // visible: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  iconSize: PropTypes.number,
  inputClassName: PropTypes.string,
  validCheck: PropTypes.bool,
  hint: PropTypes.string,
  hintColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "success",
    "info",
    "danger",
    "dark",
    "light",
  ]),
  label(props, propName) {
    // ** If label is defined and htmlFor is undefined throw error
    if (props[propName] && props["htmlFor"] === "undefined") {
      throw new Error("htmlFor prop is required when label prop is present");
    }
  },
  htmlFor(props, propName) {
    // ** If htmlFor is defined and label is undefined throw error
    if (props[propName] && props["label"] === "undefined") {
      throw new Error("label prop is required when htmlFor prop is present");
    }
  },
};

// ** Default Props
PasswordToggle.defaultProps = {
  // visible: false
};
