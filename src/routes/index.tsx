import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { DrawerRoutes } from "./app.routes";

export const Routes = () => {

  const { user, id } = useAuth();

  return (
    <NavigationContainer>
      {
        user.email || id ?
        <DrawerRoutes />
        :
        <AuthRoutes />
      }
    </NavigationContainer>
  );
};
