import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";

export const Routes = () => {

  const { user, id } = useAuth();

  return (
    <NavigationContainer>
      {user.name || id ?
        <AppRoutes />
        :
        <AuthRoutes />
      }
    </NavigationContainer>
  );
};
