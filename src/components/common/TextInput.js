import React from 'react'
import classNames from 'classnames'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const TextInput = ({
  id,
  name,
  value,
  onChange,
  type,
  required,
  autoComplete,
  placeholder,
  disabled,
  email,
  password,
  label,
  min,
  description,
  maxlength,
}) => {
  return (
    <div className="input-container">
      <div className="input-container_main">
        {label && (
          <label className="input-container_label">
            {label}
            {description && (
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>{description}</Tooltip>}
              >
                <i class="fa-solid fa-circle-info"></i>
              </OverlayTrigger>
            )}
          </label>
        )}
        <input
          className={classNames('input w-input', {
            email,
            password,
            'input-container_input': !!label,
          })}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          disabled={disabled}
          min={min}
          maxlength={maxlength}
        />
      </div>
      {/* <div className="input-container_main">
        <label className="input-container_label input_emp_label"></label>
        <label className="input-container_dis">{}</label>
      </div> */}
      <hr className="hr-line" />
    </div>
  )
}

export default TextInput
