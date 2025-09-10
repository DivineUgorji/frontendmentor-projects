import { useState } from "react";
import ToastContext from "./ToastContext";

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function createToast(message, name) {
    const id = crypto.randomUUID();
    const newToast = { id, message, name };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }

  return (
    <ToastContext.Provider value={{ toasts, setToasts, createToast }}>
      {children}
    </ToastContext.Provider>
  );
}
export default ToastProvider;
