import React  from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
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
