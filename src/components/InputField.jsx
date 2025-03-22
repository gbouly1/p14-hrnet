import React from "react";

const InputField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
}) => {
  return (
    <div>
      <label className="block mb-1" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default InputField;
