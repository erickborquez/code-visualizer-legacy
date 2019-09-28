import React from 'react';
import '../../Styles/ArrayStyle.css'



const generateRandomKey = (first, second ='') => {
    return `key-${'0' + first + second}=${new Date().getTime()}`
}

const Array1D = ({elements = [], style = {}}) => {
    return (
        <div>
            <table className="array" cellSpacing='0'>
                <thead>
                    <tr>
                        <td></td>
                        {elements.map((e, i) =>
                            <th
                                key={generateRandomKey(i,e)}
                                className={'array__indexer array__indexer--x'}>
                                {i}
                            </th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='array__indexer array__indexer--y'>0</td>
                        {elements.map((e,i) =>
                            <td
                                key={generateRandomKey(e,i)}
                                className="array__element array__value"
                                style={e.style}>
                                {e.value}
                            </td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Array1D;