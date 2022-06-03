import React from "react";

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
};

export const SeasonDisplay = ({ lat }) => {
    const season = getSeason(lat, new Date().getMonth());
    const text = season === "winter" ? "Brrr, it is chilly" : "Let's hit the beach";

    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};
