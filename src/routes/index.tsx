import React  from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/auth";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export const Routes = () => {

  const { user } = useAuth();

  return (
    <NavigationContainer>
      {
        user.name ?
        <AppRoutes />
        :
        <AuthRoutes />
      }
    </NavigationContainer>
  );
};
