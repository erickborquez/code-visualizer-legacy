import React, { useState, useEffect } from 'react';
import './Styles/App.css'
import { firestore } from './firebase';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home'
import CodeVisualizer from './CodeVisualizer'
import {colletIdsAndDocs} from './utilities.js'


const App = () => {
    const [codes, setCodes] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            console.log("fetching...");
            const result = await firestore.collection('code').get();
            const codes = result.docs.map(colletIdsAndDocs);
            setCodes(codes);
        }
        fetchData();
    }, [])

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact={true} path="/" render={({ match }) => <Home match={match} codes={codes} />} />
                    <Route path="/code" component={CodeVisualizer} />
                    <Route path='/:user/code/:cid' render={({ match }) => <CodeVisualizer match={match} />} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;
