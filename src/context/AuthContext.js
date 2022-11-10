import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
    });
    const history = useHistory();

    function login(token) {
        // console.log(token)
        localStorage.setItem('jwtToken', token);
        const decodedToken = jwtDecode(token);
        // console.log(decodedToken);

        //VANAF HIER KLOPT HET NIET GOED MEER. NOVA LES 7 1:47:21
        async function fetchUserData(token) {
            try {
                await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
            } catch (e) {
                console.error(e);
            }
        }
        fetchUserData(token);

        toggleIsAuth({
            ...isAuth,
            isAuth: true,
            // user moet ook gevuld worden
        });
        history.push("/profile")
    }

    function logout() {
        console.log('Gebruiker is uitgelogd')
        toggleIsAuth({
            ...isAuth,
            isAuth: false,
            user: null,
        });
        history.push("/")
    }

    const contextData = {
        isAuth: isAuth,
        user: 'Irene',
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