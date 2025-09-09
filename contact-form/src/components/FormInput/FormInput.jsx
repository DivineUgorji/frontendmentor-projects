import React, { useId } from "react";

const FormInput = ({ id, label, className = "", ...props }) => {
  const generatedId = useId();
  const appliedId = id || generatedId;
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={appliedId}
        className="text-grey-900 text-base"
      >{`${label} *`}</label>
      <input
        id={appliedId}
        type="text"
        {...props}
        className={`w-full border border-grey-500 rounded-xl px-6 py-3 ${className}`}
      />
    </div>
  );
};

export default FormInput;
