/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { firestore } from '../firebase';

const handleRemove = async id => {
    firestore.doc(`code/${id}`).delete();
}

const Home = ({ match, codes }) => {
    return (
        <div>
            <nav>
                <ul>
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
                        let path = `${match.url}${code.user.username}/code/${code.id}`;
                        return (
                            <div key={code.id}>
                                <Link  className="route" to={path}>{code.title}<br /></Link>
                                <button  onClick={() => handleRemove(code.id)}>Delete code :(</button>
                            </div>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Home;