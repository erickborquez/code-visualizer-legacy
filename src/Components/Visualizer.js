import React from 'react';

const generateRandomKey = (i) => {
    return `key-${i}=${new Date().getTime()}`;
}

const Visualizer = ({ steps }) => {
    const savedSteps = steps.map((s, i) => <p key={generateRandomKey(i)}>{s}</p>)

    return (
        <div>
            {savedSteps}
        </div>
    )
}

export default Visualizer;