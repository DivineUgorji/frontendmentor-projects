import React, { useState } from "react";
import NewsLetterCard from "../../components/NewsLetterCard/NewsLetterCard";
import SuccessCard from "../../components/SuccessCard";

const Main = () => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  function handleSuccess(formData) {
    setEmail(formData);
    setSuccess(true);
  }
  return (
    <main className="">
      <div className="min-h-screen grid place-content-center px-4 py-4">
        {success ? (
          <SuccessCard email={email} onDismiss={() => setSuccess(false)} />
        ) : (
          <NewsLetterCard onSuccess={handleSuccess} />
        )}
      </div>
    </main>
  );
};

export default Main;
