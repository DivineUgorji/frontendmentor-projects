import React from "react";

const RadioButton = ({ id, label, error, ...props }) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className={`
         flex items-center gap-3 cursor-pointer rounded-md border py-3 px-6 transition
        ${
          props.checked
            ? "bg-primary-green-200 border-primary-green-600"
            : "bg-white border-grey-500"
        }
      `}
      >
        <input
          type="radio"
          id={id}
          {...props}
          className="
          w-5 h-5 rounded-full border border-gray-500 accent-primary-green-600"
        />
        {/* 
         checked:border-primary-green-600 checked:bg-primary-green-600  focus:outline-none */}
        <span className="text-base text-grey-900">{label}</span>
      </label>
      {error && <span className="text-accent-red text-sm pt-2">{error}</span>}
    </div>
  );
};

export default RadioButton;
