import React, { createContext, useEffect, useRef } from 'react';
import { auth, createUserProfileDocument } from '../firebase';


const UserProvider = ({ children }) => {


    const user = useRef({})
    const UserContext = createContext(user);

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            user.current = await createUserProfileDocument(userAuth);
        })
        return unsubscribeFromAuth;
    }, []);

    return (
        <UserContext.Provider value={user.current}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider