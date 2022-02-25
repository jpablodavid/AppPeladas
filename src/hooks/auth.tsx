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

import { apiGoogle, apiInst } from "../services/api";

type User = {
	id: string;
	name: string;
	given_name: string;
	family_name: string;
	locale: string;
	email: string;
	picture: string;
	position: string;
	camisa: string;
};

type Group = {};

type AuthContextData = {
	user: User;
	loading: boolean;
	signInGoogle: () => Promise<void>;
	signInInst: () => Promise<void>;
};

type AuthProviderProps = {
	children: ReactNode;
};

type AuthorizationResponse = AuthSession.AuthSessionResult & {
	type: string;
	params: {
		access_token: string;
		code: string;
	};
};

type AuthResponse = AuthSession.AuthSessionResult & {
	type: string;
	params: {
		code: string;
	};
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<User>({} as User);

	const [loading, setLoading] = useState(false);

	async function laodProfile(token: string) {
		const response = await fetch(
			`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`
		);

		const userInfo = await response.json();

		const user = {
			id: userInfo.id,
			name: userInfo.name,
			given_name: userInfo.given_name,
			family_name: userInfo.family_name,
			locale: userInfo.locale,
			email: userInfo.email,
			picture: userInfo.picture,
			position: "Meio-Campo",
			camisa: "10",
		};

		setUser(user);
	}

	async function laodProfileInst() {
		const token =
			"IGQVJWOXhGY2pWa1JwNzU4UlhkUDdNb2YwZAmpaa0xEV0hVU1prZAlc4TWFXS1lETE5YWS12SE5LWmxPVHI0b1JQcFJoZADVVM3dWdzFpSlZAPNHpjdGNyaDVFalV6Q19waTdrTU9DSm9BM2dHVG9NQ1RqcwZDZD";
		const response = await fetch(
			`https://graph.instagram.com/me?fields=id,username&access_token=${token}`
		);

		const userInfo = await response.json();

		const user = {
			id: userInfo.id,
			name: userInfo.username,
			given_name: userInfo.username,
			family_name: userInfo.username,
			locale: "br",
			email: `${userInfo.username}@gamil.com`,
			picture: "https://github.com/jpablodavid.png",
			position: "Meio-Campo",
			camisa: "10",
		};

		setUser(user);
	}

	async function signInGoogle() {
		try {
			setLoading(true);

			const authUrl = `${apiGoogle.defaults.baseURL}?client_id=${ID_CLIENT}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

			const { type, params } = (await AuthSession.startAsync({
				authUrl,
			})) as AuthorizationResponse;

			if (type === "success") {
				await laodProfile(params.access_token);
			}
			setLoading(false);
		} catch (error) {
			throw new Error("Não foi possivel autenticar");
		}
	}

	async function signInInst() {
		try {
			setLoading(true);

			const authUrl = `${apiInst.defaults.baseURL}/oauth/authorize?client_id=${APP_ID}&redirect_uri=${INST_REDIRECT_URI}&scope=${INST_SCOPE}&response_type=${INST_RESPONSE_TYPE}`;

			const { type, params } = (await AuthSession.startAsync({
				authUrl,
			})) as AuthorizationResponse;

			if (type === "success") {
				await laodProfileInst();
			}

			setLoading(false);
		} catch (error) {
			throw new Error("Não foi possivel autenticar");
		}
	}

	return (
		<AuthContext.Provider value={{ user, loading, signInGoogle, signInInst }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);

	return context;
}

export { AuthProvider, useAuth };
