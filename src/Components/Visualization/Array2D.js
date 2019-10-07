import React from 'react';
import '../../Styles/Visualization/ArrayStyle.css'
import '../../Styles/Visualization/Structures.css'


const generateRandomKey = (first, second = '') => {
    return `key-${'0' + first + second}=${new Date().getTime()}`
}

const Array2D = ({ elements = [[0]], style = {}, name }) => {
    return (
        <div className="structure">
            <h3 className="structure__name">{name}</h3>
            <table className="array array2d" cellSpacing='4'>
                <thead>
                    <tr>
                        <td></td>
                        {elements[0].map((_, i) =>
                            <th
                                key={generateRandomKey(i)}
                                className={'array__indexer array__indexer--x'}>
                                {i}
                            </th>)}
                    </tr>
                </thead>
                <tbody>
                    {elements.map((Array1D, x) => {
                        return (
                            <tr key={generateRandomKey(x)}>
                                <td className='array__indexer array__indexer--y'>{x}</td>
                                {Array1D.map((e, y) =>
                                    <td
                                        key={generateRandomKey(e, y)}
                                        className="array__element"
                                        style={e.style}>
                                        <span className="array__value">{e.value}</span>
                                    </td>
                                )}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Array2D;