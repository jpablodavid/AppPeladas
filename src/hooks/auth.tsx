import React, { createContext, ReactNode, useContext, useState } from "react";

import * as AuthSession from "expo-auth-session";

type User = {
	id: string;
	name: string;
	given_name: string;
	family_name: string;
	locale: string;
	email?: string;
	avatar: string;
	position: string;
	camisa: string;
	nivel: string;
	xp: string;
	partidas: string;
	gols: string;
	hattrik: string;
	grupoId: string;
	adm: boolean;
	stars: string;
};

type Group = {};

type AuthContextData = {
	user: User;
	loading: boolean;
	logado: boolean;
	// signInGoogle: () => Promise<void>;
	// signInInst: () => Promise<void>;
};

type AuthProviderProps = {
	children: ReactNode;
};

type AuthResponse = AuthSession.AuthSessionResult & {
	type: string;
	params: {
		access_token: string;
		code: string;
	};
};


export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<User>({id: '1',
	name: "Pablo Boscarino David",
	given_name: 'Pablo',
	family_name: 'David',
	locale: 'rj',
	email: '@gmail.com',
	avatar: 'https://github.com/jpablodavid.png',
	position: "Zagueiro",
	camisa: '10',
	nivel: 'Perna de Pau',
	xp: '180',
	partidas: '20',
	gols: '0',
	hattrik: '0',
	grupoId: '1',
	adm: false,
	stars: '5'} as User);

	const [loading, setLoading] = useState(false);

	const [logado, setLogado] = useState(false);


	return (
		<AuthContext.Provider value={{ user, loading , logado}}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);

	return context;
}

export { AuthProvider, useAuth };
