import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout.jsx";
import "./css/app.css"

function App() {

    return (
        <React.StrictMode>
                <Layout />
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
