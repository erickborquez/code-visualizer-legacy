import React, { createContext } from 'react';


let baseURL = '/';
let repoURL = 'el-algoritmo-del-ritmo/'
if (window.location.href.match(repoURL)) {
    baseURL = repoURL;
}

export const RouteContext = createContext(baseURL);

const RouterProvider = ({ children }) => {
    return (
        <RouteContext.Provider value={baseURL}>
            {children}
        </RouteContext.Provider>
    )
}
export default RouterProvider
