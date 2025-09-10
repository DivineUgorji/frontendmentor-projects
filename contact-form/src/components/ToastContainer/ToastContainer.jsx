import React, { useContext } from "react";

import Toast from "../Toast/Toast";

import ToastContext from "../ToastProvider/ToastContext";

function ToastContainer() {
  const { toasts } = useContext(ToastContext);

  return (
    <div className="fixed top-4 left-0 right-0 flex flex-col justify-center z-50 px-4">
      <div
        className="
        flex flex-col gap-2 items-center justify-center"
      >
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            name={toast.name}
          />
        ))}
      </div>
    </div>
  );
}

export default ToastContainer;

// import { AnimatePresence } from "motion/react";
// import { useContext } from "react";
// import ToastContext from "../ToastProvider/ToastContext";

// function ToastContainer() {
//   const { toasts } = useContext(ToastContext);

//   return (
//     <div className="fixed top-4 inset-x-0 flex flex-col items-center gap-2 z-50">
//       <AnimatePresence>
//         {toasts.map((toast) => (
//           <motion.div
//             key={toast.id}
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="w-full max-w-sm bg-gray-900 text-white p-4 rounded-lg shadow-lg"
//             role="alert"
//           >
//             <p className="font-medium">{toast.message}</p>
//             <p>
//               Thanks <strong>{toast.name}</strong> for completing the form!
//             </p>
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default ToastContainer;
