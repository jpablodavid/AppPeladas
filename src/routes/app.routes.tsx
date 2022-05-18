import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AcessGroup } from "../screens/AcessGroup";
import { CreateGroup } from "../screens/CreateGroup";
import { Home } from "../screens/Home";
import { JoinGroup } from "../screens/JoinGroup";
import { Profile } from "../screens/Profile";

import { useAuth } from "../hooks/auth";
import { CustomDrawer } from "../components/CustomDrawer";
import { CreateAccount } from "../screens/CreateAccount";

const { Navigator, Screen } = createDrawerNavigator();

export const DrawerRoutes = () => {

  const { user } = useAuth();

  return (
    <Navigator
    initialRouteName='Home'
    drawerContent={(props) => <CustomDrawer {...props}/>}
    screenOptions={{
      headerShown: false,
      drawerType: "slide",
    }}
    >
      <Screen name="Home" component={Home} />

      <Screen name="CreateAccount" component={CreateAccount} />

      <Screen name="CreateGroup" component={CreateGroup} />

      <Screen name="JoinGroup" component={JoinGroup} />

      <Screen name="AcessGroup" component={AcessGroup} />

      <Screen name="Profile" component={Profile} />

    </Navigator>
  );
};
