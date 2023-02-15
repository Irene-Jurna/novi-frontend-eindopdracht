import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext({});

//JWT Decode nodig om te checken of de token nog geldig is (expiration console log expiration date)
function AuthContextProvider({ children }) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });
    const history = useHistory();

    // Mounting effect
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetchUserData(token);
        } else {
            toggleIsAuth({
                ...isAuth,
                isAuth: false,
                user: null,
                status: "done",
            });
        }
    }, []);

    function login(token) {
        // console.log(token)
        localStorage.setItem("token", token);
        // In de uitwerkingen van banana secturity professional wordt hier nog de redirect-link meegegeven en de ID
        fetchUserData(token);
    }

    //VANAF HIER KLOPT HET NIET GOED MEER. NOVA LES 7 1:47:21
    async function fetchUserData(token) {
        try {
            const result = await axios.get(
                "https://frontend-educational-backend.herokuapp.com/api/user",
                {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    email: result.data.email,
                    user: result.data.username,
                },
                status: "done",
            });
            console.log(result);
        } catch (e) {
            console.error(e);
            // Dit stukje toegevoegd op 4/2/2023
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: "done",
            });
        }
        history.push("/profile");
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            ...isAuth,
            isAuth: false,
            user: null,
            // status: 'done' nog toevoegen? (zo doen ze het wel in banana security prof)
        });
        history.push("/");
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === "done" ? (
                children
            ) : (
                <p>We're preparing all the ingredients...</p>
            )}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
