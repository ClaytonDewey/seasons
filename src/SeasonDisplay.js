import React from "react";

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: "sun",
    },
    winter: {
        text: "Brrr, it is chilly",
        iconName: "snowflake",
    },
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
};

export const SeasonDisplay = ({ lat }) => {
    const season = getSeason(lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div>
            <i className={`icon ${iconName}`} />
            <h1>{text}</h1>
            <i className={`icon ${iconName}`} />
        </div>
    );
};
