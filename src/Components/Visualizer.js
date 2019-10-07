import React from 'react';
import Array1D from './Visualization/Array1D'
import Array2D from './Visualization/Array2D'
import '../Styles/Visualizer.css'

const generateRandomKey = (i) => {
    return `key-${i}=${new Date().getTime()}`;
}

const Visualizer = ({ records, step }) => {

    const structures = records.map(s => {
        s = s[step];
        let struct;
        switch (s.type) {
            case 'Array1D':
                struct = <Array1D key={generateRandomKey(s.name)} elements={s.elements} name={s.name}></Array1D>
                break;
            case 'Array2D':
                struct = <Array2D key={generateRandomKey(s.name)} elements={s.elements} name={s.name}></Array2D>
                break;
            default:
                break;
        }
        return struct;
    });

    return (

        <div className="visualizer-structures">
            {structures}
        </div>
    )
}

export default Visualizer;