import React from 'react';
import './Styles/App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home'
import CodeVisualizer from './CodeVisualizer'



const App = () => {



    return (
        <Router>
            <div>
                <Switch>
                    <Route exact={true} path="/" render={({ match }) => <Home match={match} />} />
                    <Route exact={true} path="/code" component={CodeVisualizer} />
                    <Route path='/code/:cid' render={({ match }) => <CodeVisualizer match={match} />} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;
