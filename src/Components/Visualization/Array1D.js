import React from 'react';
import '../../Styles/Visualization/ArrayStyle.css'



const generateRandomKey = (first, second = '') => {
    return `key-${'0' + first + second}=${new Date().getTime()}`
}

const Array1D = ({ elements = [], style = {}, name }) => {
    console.log(name);
    return (
        <div className="structure">
            <h3 className="structure__name">{name}</h3>
            <table className="array array1d" cellSpacing='5'>
                <thead>
                    <tr>
                        <td></td>
                        {elements.map((e, i) =>
                            <th
                                key={generateRandomKey(i, e)}
                                className={'array__indexer array__indexer--x'}>
                                {i}
                            </th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='array__indexer array__indexer--y'>0</td>
                        {elements.map((e, i) =>
                            <td
                                key={generateRandomKey(e, i)}
                                className="array__element "
                                style={e.style}>
                                <span className="array__value"> {e.value} </span>

                            </td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Array1D;