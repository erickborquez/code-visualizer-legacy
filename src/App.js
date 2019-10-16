import React, { useContext } from 'react';
import './Styles/App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home'
import CodeVisualizer from './Components/CodeVisualizer'

import UserProvider from './providers/UserProvider'
import RouteProvider, { RouteContext } from './providers/RouterProvider';




const App = (props) => {

    const baseURL = useContext(RouteContext);

    return (
        <RouteProvider>
            <UserProvider>
                <Router>
                    <Switch>
                        <Route exact={true} path={`${baseURL}`} render={({ match }) => <Home match={match} />} />
                        <Route exact={true} path={`${baseURL}code`} component={CodeVisualizer} />
                        <Route path={`${baseURL}code/:cid`} render={({ match }) => <CodeVisualizer match={match} />} />
                    </Switch>
                </Router>
            </UserProvider>
        </RouteProvider>
    )
}

export default App;
