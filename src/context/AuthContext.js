import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    const [loading, setLoading] = useState(true);

    const loginUser = async (data) => {
        let response = await axios.post('https://localhost:44390/api/Account/Login', data).then((response) => {
            console.log(response)
            if (response.data.success === true) {
                setAuthTokens(response.data);
                console.log(response.data);
                localStorage.setItem("authTokens", JSON.stringify(response.data));
                navigate('/admin');
            } else {
                alert('Something went wrong!')
            }
        })
    }

    const registerUser = async (data) => {
        console.log(data);
        let response = await axios.post('https://localhost:44390/api/Account/Register', data, {
            headers: {
                Authorization: 'Bearer ' + authTokens.token
            }
        }
        ).then((response) => {
            console.log(response);
        })
    }

    const logoutUser = () => {
        setAuthTokens(null);
        localStorage.removeItem("authTokens");
        navigate('/login');
    }

    const updateToken = async () => {
        let response = await axios.post('https://localhost:44390/api/Account/RefreshToken', {
            'token': authTokens.token,
            'refreshToken': authTokens.refreshToken,
        }).then((response) => {
            console.log(response)
            if (response.data.success === true) {
                setAuthTokens(response.data);
                localStorage.setItem("authTokens", JSON.stringify(response.data));
            } else {
                logoutUser();
            }
        })
    }

    useEffect(() => {

        const fourMinutes = 1000 * 60;
        const interval = setInterval(() => {
            if (authTokens) {
                console.log('HI HI HI!')
                updateToken();
            }
        }, fourMinutes)
        return () => clearInterval(interval);

    }, [authTokens, loading])

    const contextData = {
        tokens: authTokens,
        token: authTokens?.token,
        loginUser: loginUser,
        logoutUser: logoutUser,
        registerUser: registerUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
