import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { theme } from "../global/styles/theme";

import { AcessGroup } from "../screens/AcessGroup";
import { CreateGroup } from "../screens/CreateGroup";
import { Home } from "../screens/Home";
import { JoinGroup } from "../screens/JoinGroup";
import { Profile } from "../screens/Profile";

import { useAuth } from "../hooks/auth";

const { Navigator, Screen } = createDrawerNavigator();

export const DrawerRoutes = () => {

  const { user, logOut } = useAuth();

  return (
    <Navigator
    initialRouteName={user.position ? 'Home' : 'CreateAccount' }
    screenOptions={{
      headerShown: false,
    }}
    >
      <Screen name="Home" component={Home} />

      <Screen name="Group" component={CreateGroup} />

      <Screen name="JoinGroup" component={JoinGroup} />

      <Screen name="AcessGroup" component={AcessGroup} />

      <Screen name="Profile" component={Profile} />

      {/* <Screen name="Sair" component={logOut()} /> */}

    </Navigator>
  );
};
