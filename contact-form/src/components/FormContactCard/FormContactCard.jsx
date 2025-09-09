import React from "react";
import FormInput from "../FormInput";
import RadioButton from "../UI/RadioButton";
import Button from "../UI/Button/Button";

const FormContactCard = () => {
  return (
    <div className="grid w-full max-w-[46rem] mx-auto min-h-screen bg-neutral-100 p-[2.5rem] rounded-xl shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-grey-900">Contact Us</h2>
      </div>

      <form className="space-y-6">
        <FormInput type="text" label="First Name" name="firstName" required />
        <FormInput type="text" label="Last Name" name="lastName" required />
        <FormInput type="email" label="Email" name="email" required />
        <fieldset>
          <legend>Query Type *</legend>
          <div className="flex gap-4 pt-4">
            <RadioButton
              name="queryType"
              type="radio"
              label="General Enquiry"
            />
            <RadioButton
              name="queryType"
              type="radio"
              label="Support Request"
            />
          </div>
        </fieldset>
        <FormInput
          type="textarea"
          label="Message"
          name="message"
          className="min-h-[6rem]"
        />
        <FormInput
          type="check"
          name="agreeCheck"
          label="I consent to being contacted by the team"
        />
        <div className="justify-self-center">
          <Button className="bg-primary-green-600 text-neutral-100">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormContactCard;
