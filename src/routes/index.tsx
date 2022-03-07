import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/auth";
import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
	const { user, logado } = useAuth();

	return (
		<NavigationContainer>
			{
				logado ? <AppRoutes />
				: <AuthRoutes />
			}
		</NavigationContainer>
	);
};

