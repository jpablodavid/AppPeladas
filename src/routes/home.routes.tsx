import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { Accounting } from "../screens/Accounting";
import { AccountGroup } from "../screens/AccountGroup";
import { CreateAccount } from "../screens/CreateAccount";

import { useAuth } from "../hooks/auth";

import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export const  HomeRoutes = () => {

  const { user, group } = useAuth();

  return (
    <Navigator
      initialRouteName='AppRoutes'
      screenOptions={{
        headerStyle:{
          backgroundColor:theme.colors.tabColor,
          borderBottomLeftRadius: 36,
        },
        headerTitleStyle:{
          marginLeft: 8,
          fontSize: 32,
          fontFamily: theme.fonts.title700
        },
        cardStyle:{
          backgroundColor: 'red',
        }
      }}
    >
      <Screen name="Home" component={Home} options ={{ title: user.nickName }}/>

      <Screen name="AccountGroup" component={AccountGroup} />

      <Screen name="Accounting" component={Accounting} />

      <Screen name="CreateAccount" component={CreateAccount} />

    </Navigator>
  );
};

