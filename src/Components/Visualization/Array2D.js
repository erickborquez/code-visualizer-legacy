import React from 'react';
import '../../Styles/ArrayStyle.css'


const generateRandomKey = (first, second = '') => {
    return `key-${'0' + first + second}=${new Date().getTime()}`
}

const Array2D = ({ elements = [[0]], style = {} }) => {
    return (
        <div>
            <table className="Array2D" cellSpacing='0'>
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
                                        className="array__element array__value"
                                        style={e.style}>
                                        {e.value}
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