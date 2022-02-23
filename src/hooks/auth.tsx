import React, { createContext, ReactNode, useContext, useState } from "react";

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
};

type AuthProviderProps = {
	children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<User>({
		id: "pablo",
		firstname: "pablo",
		avatar: "pablo",
		email: "pablo",
		token: "pablo",
	} as User);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);

	return context;
}

export { AuthProvider, useAuth };
