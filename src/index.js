import React from "react";
import ReactDOM from "react-dom/client";
import { SeasonDisplay } from "./SeasonDisplay";

const App = () => {
    return <SeasonDisplay />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
