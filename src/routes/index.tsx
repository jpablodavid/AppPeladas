import React  from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { TabRoutes } from "./app.routes";
import { Group } from "../screens/Group";

export const Routes = () => {

  const { user } = useAuth();

  return (
    <NavigationContainer>
      {
        user.name ?
        <TabRoutes />
        :
        <AuthRoutes />
      }
    </NavigationContainer>
  );
};
