import { Controller } from "react-hook-form"
import PropTypes from "prop-types"
import { FormFeedback, FormGroup, Input, Label } from "reactstrap"
import classnames from "classnames"

const AppRadio = ({
  label,
  name,
  required,
  color,
  control,
  tooltip,
  options,
  setValue,
  inline,
  value,
  ...rest
}) => {
  const changeEvent = (e, data) => {
    if (required) setValue(name, data, { shouldValidate: true })
    else setValue(name, data)
  }

  return (
    <>
      {label ? (<Label>{label} {required ? <small className="text-danger">*</small> : null}</Label>) : null}
      <Controller
        render={({
          field,
          fieldState: { invalid, isTouched, isDirty, error }
        }) => (
          <div className={classnames("mb-1", { "position-relative": tooltip })}>
            {options &&
              options.map((data, index) => (
                <FormGroup check inline={inline} key={index} className={`form-check-${color}`}>
                  <Input
                    {...rest}
                    {...field}
                    type="radio"
                    name={name}
                    id={data}
                    checked={field.value === data ? true : false}
                    onChange={(e) => {
                      field.onChange(e)
                      changeEvent(e, data)
                    }}
                    value={data}
                    invalid={(isTouched || isDirty || error) && invalid}
                  />
                  <Label check htmlFor={data}>
                    {data}
                  </Label>
                </FormGroup>
              ))}
            {error && (<FormFeedback tooltip={tooltip ?? false} className="d-block"> {error.message}</FormFeedback>)}
          </div>
        )}
        name={name}
        control={control}
        rules={{ required: required ?? false }}
        defaultValue={value}
      />
    </>
  )
}

AppRadio.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "secondary", "warning", "success", "info", "danger", "dark", "light"]),
  control: PropTypes.any.isRequired,
  tooltip: PropTypes.bool,
  options: PropTypes.array.isRequired,
  setValue: PropTypes.any,
  inline: PropTypes.bool,
  value: PropTypes.any
}

export default AppRadio