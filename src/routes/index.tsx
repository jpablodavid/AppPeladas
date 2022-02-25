import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";

export const Routes = () => {
	const { user } = useAuth();

	return (
		<NavigationContainer>
			<AuthRoutes/>
		</NavigationContainer>
	);
};
