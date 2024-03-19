// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { App } from "./views/App.jsx";
import { Navbar } from "./components/navbar.jsx";

import injectContext from "./store/appContext.jsx";

const Layout = () => {
  const basename = import.meta.env.VITE_BASENAME || "";
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <App />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
