import React, { useId } from "react";

const FormInput = ({ id, label, error, className = "", ...props }) => {
  const generatedId = useId();
  const appliedId = id || generatedId;
  return (
    <div className="w-full">
      <div className={`flex flex-col gap-2  ${className}`}>
        <label
          htmlFor={appliedId}
          className="text-grey-900 text-base"
        >{`${label} *`}</label>
        <input
          id={appliedId}
          {...props}
          className={`w-full rounded-lg px-6 py-3
            border border-gray-500 focus:outline-none focus:border-primary-green-600 ${className}`}
        />
      </div>
      {error && <span className="text-accent-red text-sm pt-2">{error}</span>}
    </div>
  );
};

export default FormInput;
