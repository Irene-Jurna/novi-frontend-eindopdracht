import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Loader from "../components/Loader";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwtDecode(token);
            fetchUserData(token, decodedToken);
        } else {
            toggleIsAuth({
                ...isAuth,
                status: "done",
            });
        }
    }, []);

    async function fetchUserData(token, decodedToken) {
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
                    name: decodedToken.sub,
                },
                status: "done",
            });
        } catch (e) {
            console.error(e);
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: "done",
            });
        }
    }

    function login(token) {
        localStorage.setItem("token", token);
        const decodedToken = jwtDecode(token);

        toggleIsAuth({
            ...isAuth,
            isAuth: true,
            name: decodedToken.sub,
        });
        history.push("/profile");
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: "done",
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
                <Loader emoji="🫕" funnyText="Almost ready!" />
            )}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
