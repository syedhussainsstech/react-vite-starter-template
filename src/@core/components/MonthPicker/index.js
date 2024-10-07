// ** React Imports
import React, { forwardRef } from "react"
import { FormFeedback, Label } from "reactstrap"

// ** Third Components
import PropTypes from "prop-types"
import { Controller } from "react-hook-form"
import DatePicker from "react-datepicker"

// ** Icons
import { Calendar } from "react-feather"

// ** Styles
import "../../../@core/scss/react/libs/datepicker/datepicker.scss"
import classNames from "classnames"

const AppMonthPicker = forwardRef(({
    label,
    onChange,
    onKeyPress,
    onKeyUp,
    name,
    required,
    id,
    control,
    minDate,
    maxDate,
    value,
    error,
    tooltip,
    showMonthYearPicker,
    selectsRange,
    ...rest
}, ref) => {
    return (
        <div className="mb-1">
            {label && (
                <Label className="d-block">
                    {label} {required && <small className="text-danger">*</small>}
                </Label>
            )}
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <>
                        <DatePicker
                            {...rest}
                            {...field}
                            ref={ref}
                            className={classNames("form-control flatpickr-input", { "is-invalid": error })}
                            wrapperClassName={classNames({ "is-invalid": error })}
                            // calendarClassName="hussain"
                            selected={selectsRange ? field.value?.[0] : field.value}
                            onChange={(date) => {
                                field.onChange(date)
                                if (onChange) {
                                    onChange(date)
                                }
                            }}
                            onFocus={(e) => e.preventDefault()} // Prevent default focus behavior
                            selectsRange={selectsRange}
                            startDate={selectsRange ? field.value?.[0] : undefined}
                            endDate={selectsRange ? field.value?.[1] : undefined}
                            showIcon
                            icon={<Calendar size="15" color="#bfbfc0" />}
                            showMonthYearPicker={showMonthYearPicker}
                            dateFormat="MM/yyyy"
                            minDate={minDate ?? undefined}
                            maxDate={maxDate ?? undefined}
                        />
                        {error && (
                            <FormFeedback tooltip={tooltip ?? false}>{error?.message}</FormFeedback>
                        )}
                    </>
                )}
            />
        </div>
    )
})

AppMonthPicker.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    error: PropTypes.any,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    control: PropTypes.any.isRequired,
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    value: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.arrayOf(PropTypes.instanceOf(Date))
    ]),
    tooltip: PropTypes.bool,
    showMonthYearPicker: PropTypes.bool,
    selectsRange: PropTypes.bool,
}

export default AppMonthPicker