import React from 'react'

const RowInput = ({type, id, label, name, value, onChange}) =>{

  return (
    <div className="form-row">
    <label className="form-label" htmlFor={name}>{label || name}</label>
    <input
      type={type}
      id={name}
      name={name}
      className="form-input"
      value={value}
      onChange={onChange}
    />
  </div>
  )
}

export default RowInput