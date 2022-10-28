import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/styles/theme";

import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { CreateAccount } from "../screens/CreateAccount";


const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {

  return (
    <Navigator
      initialRouteName='SignIn'
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.tabColor,
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />

      <Screen name="SignUp" component={SignUp} />

      <Screen name="CreateAccount" component={CreateAccount} />

    </Navigator>
  );
};
