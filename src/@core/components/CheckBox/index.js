import { useState } from "react"
import PropTypes from "prop-types"
import { Controller } from "react-hook-form"
import { Check, X } from "react-feather"
import { FormFeedback, FormGroup, FormText, Input, Label } from "reactstrap"
import classnames from "classnames"

const AppCheckbox = ({
  label,
  name,
  required,
  size,
  color,
  id,
  control,
  tooltip,
  isSwitch,
  options,
  isSwitchIcon,
  setValue,
  checkboxLabel,
  inline,
  value,
  hint,
  onChange,
  ...rest
}) => {
  // Checkbox States
  const [actualValue, setActualValue] = useState([])

  // On Change Event
  const changeEvent = (e, data) => {
    let val = actualValue
    if (onChange) onChange(e.target.checked, data)

    if (e.target.checked) {
      if (!actualValue.includes(data)) {
        val = [...val, data]
        setActualValue((prev) => [...prev, data])
      }
    } else {
      val = actualValue.filter((x) => x !== data)
      setActualValue(actualValue.filter((x) => x !== data))
    }
    if (required) {
      if (val.length === 0) setValue(name, null, { shouldValidate: true })
      else setValue(name, val, { shouldValidate: true })
    } else {
      setValue(name, val)
    }
  }

  // Custom Label if it is switch with icon
  const CustomLabel = ({ htmlFor }) => {
    return (
      <Label className="form-check-label" htmlFor={htmlFor}>
        <span className="switch-icon-left">
          <Check size={14} />
        </span>
        <span className="switch-icon-right">
          <X size={14} />
        </span>
      </Label>
    )
  }

  // checked condition
  // const checkCondition = (field, data) => {
  //   if (field.value && field.value.includes(data)) return true
  //   else return false
  // }

  return (
    <>
      {label ? (
        <Label>
          {label} {required ? <small className="text-danger">*</small> : null}
        </Label>
      ) : null}
      <Controller
        render={({
          field,
          fieldState: { invalid, isTouched, isDirty, error }
        }) => (
          <div
            className={classnames("mb-1", {
              "position-relative": tooltip
            })}
          >
            {options && options.length ? (
              options.map((data, index) => {
                return (
                  <FormGroup
                    key={index}
                    check={!isSwitchIcon || !isSwitch}
                    inline={inline}
                    switch={isSwitch || isSwitchIcon}
                    className={`form-check-${color}`}
                  >
                    <Input
                      {...rest}
                      {...field}
                      type="checkbox"
                      id={data}
                      value={data}
                      invalid={(isTouched || isDirty || error) && invalid}
                      checked={field.value && field.value.includes(data) ? true : false}
                      onChange={(e) => {
                        field.onChange(e)
                        changeEvent(e, data)
                      }}
                    />
                    {isSwitchIcon ? <CustomLabel htmlFor={data} /> : null}
                    <Label check htmlFor={data} className='form-check-label'>
                      {data}
                    </Label>
                  </FormGroup>
                )
              })
            ) : (
              <FormGroup
                check={!isSwitchIcon || !isSwitch}
                inline={inline}
                switch={isSwitch || isSwitchIcon}
                className={`form-check-${color}`}
              >
                <Input
                  {...rest}
                  {...field}
                  type="checkbox"
                  id={id}
                  bsSize={size}
                  checked={!!field.value}
                  invalid={(isTouched || isDirty || error) && invalid}
                  onChange={(e) => {
                    field.onChange(e)
                    if (onChange) onChange(e)
                  }}
                />
                {isSwitchIcon ? <CustomLabel htmlFor={id} /> : null}
                <Label check htmlFor={id} className='form-check-label'>
                  {checkboxLabel}
                </Label>
                {hint ? <FormText className="d-block text-muted">{hint}</FormText> : null}
              </FormGroup>
            )}
            {error && (
              <FormFeedback tooltip={tooltip ?? false} className="d-block">
                {error.message}
              </FormFeedback>
            )}
          </div>
        )}
        name={name}
        control={control}
        rules={{
          required: required ?? false
        }}
        defaultValue={value}
      />
    </>
  )
}

AppCheckbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"]),
  color: PropTypes.oneOf(["primary", "secondary", "warning", "success", "info", "danger", "dark", "light"]),
  id: PropTypes.string,
  control: PropTypes.any.isRequired,
  tooltip: PropTypes.bool,
  isSwitch: PropTypes.bool,
  options: PropTypes.array,
  isSwitchIcon: PropTypes.bool,
  setValue: PropTypes.any,
  checkboxLabel: PropTypes.string,
  inline: PropTypes.bool,
  value: PropTypes.any,
  hint: PropTypes.string,
}

export default AppCheckbox
