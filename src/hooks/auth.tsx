import React, { createContext, useCallback, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";

interface SignInCredentials{
    email: string;
    password: string;
}

interface AuthContextData{
    user: object;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
}

interface AuthState{
    token: string;
    user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@savetheday:token');
        const user = localStorage.getItem('@savetheday:user');

        if (token && user) {
            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;
    });

    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('/sessions', {
            email,
            password
        });

        const { token, user } = response.data;

        localStorage.setItem('@savetheday:token', token);
        localStorage.setItem('@savetheday:user', JSON.stringify(user));

        setData({} as AuthState);
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@savetheday:token');
        localStorage.removeItem('@savetheday:user');

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
          {children}
        </AuthContext.Provider>
      );
};

export function useAuth(): AuthContextData{
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('UseAuth must be used within an AuthProvider');
    }

    return context;
}