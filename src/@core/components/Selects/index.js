// ** Third Party Components
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import classnames from "classnames";
import { FormFeedback, InputGroupText, Label, Spinner } from "reactstrap";
import Select from "react-select";

import "../../../@core/scss/react/libs/react-select/_react-select.scss";
import { selectThemeColors } from "@utils";

const formatGroupLabel = ({ label, options }) => (
  <div className="d-flex justify-content-between align-center">
    <strong>
      <span>{label}</span>
    </strong>
    <span>{options.length}</span>
  </div>
);

const AppSelect = ({
  label,
  onChangeEvent,
  name,
  required,
  icon,
  value,
  id,
  control,
  tooltip,
  options,
  isGroup,
  isLoading,
  isDisabled,
  className,
  ...rest
}) => {
  return (
    <>
      <Controller
        render={({
          field,
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <div className={classnames("mb-1", { "position-relative": tooltip })}>
            {label ? (
              <Label htmlFor={id}>
                {label}{" "}
                {required ? <small className="text-danger">*</small> : null}
              </Label>
            ) : null}
            <div
              className={classnames({
                "input-group-merge": icon,
                "is-invalid": error,
              })}
            >
              {icon ? (
                <InputGroupText
                  className={classnames({ "text-danger": error })}
                >
                  {icon}
                </InputGroupText>
              ) : null}
              <Select

                {...rest}
                {...field}
                theme={selectThemeColors}
                className={classnames("react-select", className, {
                  "is-invalid": (isTouched || isDirty || error) && invalid,
                })}
                id={id}
                classNamePrefix="select"
                defaultValue={value ?? null}
                formatGroupLabel={isGroup ? formatGroupLabel : undefined}
                options={options}
                isDisabled={isDisabled}
                loadingMessage={() => (
                  <Spinner color="primary" size="md" type="grow" />
                )}
                menuPortalTarget={document.body}
                menuPosition={"fixed"}
                // menuIsOpen={true}
                onChange={(option) => {
                  field.onChange(option);
                  if (onChangeEvent) onChangeEvent(option ? option : null);
                }}
                isLoading={isLoading ? isLoading : false}
              />
            </div>
            {error && (
              <FormFeedback tooltip={tooltip ?? false}>
                {error.message}
              </FormFeedback>
            )}
          </div>
        )}
        name={name}
        control={control}
        rules={{ required: required ?? false }}
        // defaultValue={value ?? null}
      />
    </>
  );
};

AppSelect.propTypes = {
  label: PropTypes.string,
  onChangeEvent: PropTypes.func,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  icon: PropTypes.node,
  value: PropTypes.any,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  control: PropTypes.any.isRequired,
  tooltip: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  isGroup: PropTypes.bool,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

export default AppSelect;
