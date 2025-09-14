import React from "react";

const FormInput = ({ id, label, error, className, ...props }) => {
  const generatedId = crypto.randomUUID();
  const appliedId = generatedId;
  return (
    <div>
      <div className="flex justify-between pb-2 pt-[2.5rem]">
        <label
          htmlFor={appliedId}
          className="text-dark-slate-grey font-semibold"
        >
          {label}
        </label>
        {error && (
          <span className="font-semibold text-primary-tomato">{error}</span>
        )}
      </div>
      <input
        id={id || appliedId}
        type="text"
        name="email"
        inputMode="email"
        autoComplete="email"
        placeholder="email@company.com"
        formNoValidate
        {...props}
        className={`w-full border outline-none px-6 py-4 rounded-xl ${
          error
            ? "bg-primary-tomato/15 border-primary-tomato"
            : "border-neutral-grey focus:border-dark-slate-grey"
        }  ${className}`}
      />
    </div>
  );
};

export default FormInput;
