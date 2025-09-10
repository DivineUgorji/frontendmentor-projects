import React, { useId } from "react";

const CheckButton = ({ id, label, checked, error, className, ...props }) => {
  const generatedId = useId();
  const appliedId = id || generatedId;
  return (
    <div>
      <div className="flex gap-4 items-center">
        <input
          type="checkbox"
          checked={checked}
          id={appliedId}
          {...props}
          className="w-5 h-5 accent-primary-green-600"
        />

        <label htmlFor={appliedId} className={`text-grey-900 ${className}`}>
          {label}
        </label>
      </div>
      {error && <span className="text-accent-red text-sm pt-2">{error}</span>}
    </div>
  );
};

export default CheckButton;
