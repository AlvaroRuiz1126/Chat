import React, { createContext, useCallback, useContext, useState } from 'react';
import { ChatContext } from '../context/chat/ChatContext';
import { types } from '../types/types';
import { fetchWithoutToken, fetchWithToken } from './../helpers/fetch';

export const AuthContext = createContext();

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null,
};


export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(initialState);
    const {dispatch} = useContext(ChatContext);

    const login = async (email, password) => {
        const resp = await fetchWithoutToken('login', {email, password}, 'POST');
        //console.log(resp);

        if(resp.ok){
            localStorage.setItem('token', resp.token);

            setAuth({
                uid: resp.user.uid,
                checking: false,
                logged: true,
                name: resp.user.nombre,
                email: resp.user.email,
            });
        }

        return resp.ok;
    };

    const register = async (nombre, email, password) => {
        const resp = await fetchWithoutToken('login/new', {nombre, email, password}, 'POST');
        //console.log(resp);

        if(resp.ok){
            localStorage.setItem('token', resp.token);

            setAuth({
                uid: resp.user.uid,
                checking: false,
                logged: true,
                name: resp.user.nombre,
                email: resp.user.email,
            });
        }

        return resp;
    };

    const verifyToken = useCallback(async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
            });

            return false;
        }
        
        const resp = await fetchWithToken('login/renew');

        if(resp.ok){
            localStorage.setItem('token', resp.token);

            setAuth({
                uid: resp.user.uid,
                checking: false,
                logged: true,
                name: resp.user.nombre,
                email: resp.user.email,
            });

            return true;
        }else {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
            });

            return false;
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('token');

        setAuth({
            checking: false,
            logged: false,
        });

        dispatch({
            type: types.cleanMessages
        });
    };

    return (
        <AuthContext.Provider value={{login, register, verifyToken, logout, auth}}>
            {children}
        </AuthContext.Provider>
    )
}
