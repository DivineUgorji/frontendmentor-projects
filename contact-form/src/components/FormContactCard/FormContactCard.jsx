import React, { useContext, useState } from "react";
import FormInput from "../FormInput";
import RadioButton from "../UI/RadioButton";
import Button from "../UI/Button/Button";
import CheckButton from "../UI/CheckButton";
import ToastContext from "../ToastProvider/ToastContext";
import ToastContainer from "../ToastContainer";

const FormContactCard = () => {
  const { createToast } = useContext(ToastContext);
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    checked: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validators = {
    firstName: (value) => {
      if (!value) return "This field is required";
      if (!/^[A-Za-z0-9]{3,16}$/.test(value)) {
        return "This field is required";
      }
      return null;
    },
    lastName: (value) => {
      if (!value) return "This field is required";
      if (!/^[A-Za-z0-9]{3,16}$/.test(value)) {
        return "Last name must be 3 - 16 characters";
      }
      return null;
    },
    email: (value) => {
      if (!value) return "This field is required";
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
        return "Please enter a valid email address";
      }
      return null;
    },
    queryType: (value) => {
      if (!value) return "Please select a query type";
      return null;
    },
    message: (value) => {
      if (!value) return "This field is required";
      if (!/^.{30,}$/.test(value)) {
        return "Message is too short (min: 30 characters)";
      }
      return null;
    },
    checked: (value) => {
      if (!value)
        return "To submit this form, please consent to being contacted";
      return null;
    },
  };

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = Object.keys(validators).reduce((acc, field) => {
      const error = validators[field](formData[field]);
      if (error) acc[field] = error;
      return acc;
    }, {});

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    createToast("Message sent", `${formData.firstName}`);
    setFormData(initialFormData);
    setErrors({});

    console.log("After reset:", initialFormData);
  }

  return (
    <div className="relative grid max-w-[46rem] mx-auto min-h-screen bg-neutral-100 p-6 lg:p-[2.5rem] rounded-xl shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-grey-900">Contact Us</h2>
      </div>

      <ToastContainer />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4">
          <FormInput
            type="text"
            label="First Name"
            name="firstName"
            value={formData.firstName}
            error={errors.firstName}
            onChange={(event) =>
              setFormData({ ...formData, firstName: event.target.value })
            }
          />
          <FormInput
            type="text"
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            error={errors.lastName}
            onChange={(event) =>
              setFormData({ ...formData, lastName: event.target.value })
            }
          />
        </div>
        <FormInput
          type="text"
          label="Email"
          name="email"
          error={errors.email}
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <fieldset>
          <legend>Query Type *</legend>
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <RadioButton
              name="queryType"
              type="radio"
              label="General Enquiry"
              value="general-enquiry"
              checked={formData.queryType === "general-enquiry"}
              onChange={(event) =>
                setFormData({ ...formData, queryType: event.target.value })
              }
              error={errors.queryType}
            />
            <RadioButton
              name="queryType"
              type="radio"
              label="Support Request"
              value="support-request"
              checked={formData.queryType === "support-request"}
              onChange={(event) =>
                setFormData({ ...formData, queryType: event.target.value })
              }
              error={errors.queryType}
            />
          </div>
        </fieldset>
        <FormInput
          type="textarea"
          label="Message"
          name="message"
          value={formData.message}
          onChange={(event) =>
            setFormData({ ...formData, message: event.target.value })
          }
          className="w-full p-0 min-h-[6rem] align-top leading-snug resize-none"
          error={errors.message}
        />
        <CheckButton
          label="I consent to being contacted by the team *"
          checked={formData.checked}
          onChange={(event) =>
            setFormData({ ...formData, checked: event.target.checked })
          }
          error={errors.checked}
        />

        <Button
          type="submit"
          className="justify-self-center bg-primary-green-600 hover:bg-green-950  text-neutral-100 transition ease-in-out"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormContactCard;
