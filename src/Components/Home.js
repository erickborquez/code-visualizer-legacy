/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { firestore } from '../firebase';

import SignInAndOut from './SignInAndOut'

import { colletIdsAndDocs } from '../utilities.js'


const handleRemove = async id => {
    firestore.doc(`code/${id}`).delete();
}



const Home = ({ match }) => {
    const [codes, setCodes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await firestore.collection('code').get();
            const codes = result.docs.map(colletIdsAndDocs);
            setCodes(codes);
        }
        fetchData();
    }, [])

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <SignInAndOut />
                    </li>
                    <li>
                        <Link to="/" className="route">Home</Link>
                    </li>
                    <li>
                        <Link to="/code" className="route">Start Coding!</Link>
                    </li>
                    <li>
                        <Link to="/users" className="route">See other users</Link>
                    </li>
                    {codes.map(code => {
                        let path = `${match.url}code/${code.id}`;
                        return (
                            <div key={code.id}>
                                <Link className="route" to={path}>{code.title}<br /></Link>
                                <button onClick={() => handleRemove(code.id)}>Delete code :(</button>
                            </div>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Home;