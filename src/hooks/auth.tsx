import React, { createContext, ReactNode, useContext, useState } from "react";

import * as AuthSession from "expo-auth-session";

import {
	INST_REDIRECT_URI,
	INST_SCOPE,
	INST_RESPONSE_TYPE,
	APP_ID,
	APP_SECRET,
	CODE,
} from "../configs/instagram";

import {
	REDIRECT_URI,
	SCOPE,
	RESPONSE_TYPE,
	ID_CLIENT,
	KEY_CLIENT,
} from "../configs/google";

import { apiInst, apiGoogle } from "../services/api";

type User = {
	id: string;
	firstname: string;
	avatar: string;
	email: string;
	token: string;
};

type Group = {};

type AuthContextData = {
	user: User;
	loading: boolean;
	signIn: () => Promise<void>;
	signInInst: () => Promise<void>;
};

type AuthProviderProps = {
	children: ReactNode;
};

type AuthorizationResponse = AuthSession.AuthSessionResult & {
	type: string;
	params: {
		access_token: string;
	};
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<User>({} as User);

	const [loading, setLoading] = useState(false);

	async function signIn() {
		try {
			setLoading(true);

			const authUrl = `${apiGoogle.defaults.baseURL}?client_id=${ID_CLIENT}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

			const { type, params } = (await AuthSession.startAsync({
				authUrl,
			})) as AuthorizationResponse;

			if (type === "success") {
				alert("success");
			}
			setLoading(false);
		} catch (error) {
			throw new Error("Não foi possivel autenticar");
		}
	}

	async function signInInst() {
		try {
			setLoading(true);

			const authUrl = `${apiInst.defaults.baseURL}/oauth/authorize?client_id=${APP_ID}&redirect_uri=${INST_REDIRECT_URI}&scope=${INST_SCOPE}&response_type=code`;

			const { type, params } = (await AuthSession.startAsync({
				authUrl,
			})) as AuthorizationResponse;

			setLoading(false);
		} catch (error) {
			throw new Error("Não foi possivel autenticar");
		}
	}

	return (
		<AuthContext.Provider value={{ user, loading, signIn, signInInst }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);

	return context;
}

export { AuthProvider, useAuth };
