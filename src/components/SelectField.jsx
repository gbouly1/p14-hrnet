import React from "react";

const SelectField = ({
  id,
  label,
  value,
  onChange,
  options = [],
  required = false,
  placeholder = "Select an option",
}) => {
  return (
    <div>
      <label className="block mb-1" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        aria-label={id}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required={required}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value || option} value={option.value || option}>
            {option.name || option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
