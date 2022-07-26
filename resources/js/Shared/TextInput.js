import React from 'react';

export default ({ label, name, className, errors = [], ...props }) => {
  return (
    <div className={className}>
      {label && (
        <label className="form-label text-black mr-2" htmlFor={name}>
          {label}:
        </label>
      )}
      <input
        id={name}
        name={name}
        {...props}
        className={`form-input
        form-control
        appearance-none
        bg-transparent
        border-gray-700
        rounded-2xl
        shadow-sm
        focus:outline-none
        focus:border-blue-900
        focus:ring-1-blue-900
        placeholder-blue-900
        ${errors.length ? 'error' : ''}`}
      />
      {errors && <div className="form-error">{errors}</div>}
    </div>
  );
};
