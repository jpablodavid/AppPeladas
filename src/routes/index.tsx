import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { DrawerRoutes } from "./drawer.routes";

export const Routes = () => {

  const { user, id, loading } = useAuth();

  return (
    <NavigationContainer>
      {user.name || id ?
       /*  <AppRoutes /> */
        < DrawerRoutes />
        :
        <AuthRoutes />
      }
    </NavigationContainer>
  );
};
