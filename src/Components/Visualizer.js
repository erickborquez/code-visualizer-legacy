import React from 'react';
import Array1D from './Visualization/Array1D'

const generateRandomKey = (i) => {
    return `key-${i}=${new Date().getTime()}`;
}

//<Array1D elements={records[0].elements} style={records[0].style}></Array1D>
//{(records.length > 0 ? <Array1D elements={records[0].elements} style={records[0].style}></Array1D> : null)}  

const Visualizer = ({ records, step }) => {

    const structures = records.map(s => {
        s = s[step];
        let struct;
        switch (s.type) {
            case 'Array1D':
                struct = <Array1D key={generateRandomKey(s.name)} elements={s.elements}name={s.name}></Array1D>
                break;
            default:
                break;
        }
        return struct;
    });

    return (
        <div>
            {structures}
        </div>
    )
}

export default Visualizer;