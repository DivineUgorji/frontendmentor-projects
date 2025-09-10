import React from "react";
import FormContactCard from "./components/FormContactCard/FormContactCard";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer/Footer";
import ToastProvider from "./components/ToastProvider";
import ToastContainer from "./components/ToastContainer";

const App = () => {
  return (
    <div className="grid">
      <ToastProvider>
        <Header />
        <Main />
        <Footer />
      </ToastProvider>
    </div>
  );
};

export default App;
