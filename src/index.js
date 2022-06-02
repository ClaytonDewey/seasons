import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position.coords.latitude),
            (err) => console.error(err)
        );

        return <h1>Latitude: </h1>;
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
