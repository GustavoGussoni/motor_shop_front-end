import { ToastContainer } from 'react-toastify';
import { RouteMain } from "./Routes";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <React.Fragment>
      <RouteMain />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </React.Fragment>
  );
};
