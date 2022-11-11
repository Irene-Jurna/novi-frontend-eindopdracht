import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const history = useHistory();

    function login(token) {
        // console.log(token)
        localStorage.setItem('token', token);
        fetchUserData(token);
    }

        //VANAF HIER KLOPT HET NIET GOED MEER. NOVA LES 7 1:47:21
        async function fetchUserData(token) {
            try {
                const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                toggleIsAuth({
                    ...isAuth,
                    isAuth: true,
                    user: {
                        email: result.data.email,
                        user: result.data.username,
                    }
                });
                console.log(result);
            } catch (e) {
                console.error(e);
            }
            history.push('/profile');
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            ...isAuth,
            isAuth: false,
            user: null,
        });
        history.push("/")
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthContextProvider;