import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RFValue } from "react-native-responsive-fontsize";
import { useAuth } from "../hooks/auth";

import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { AccountGroup } from "../screens/AccountGroup";

import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();


export const  HomeRoutes = () => {

  const { tabColor } = theme.colors;
  const { title700 } = theme.fonts;

  const { user } = useAuth();

  return (
    <Navigator
      initialRouteName='AppRoutes'
      screenOptions={{
        headerStyle:{
          backgroundColor: tabColor,
          borderBottomLeftRadius: 36,
        },
        headerTitleStyle:{
          marginLeft: 8,
          fontSize: RFValue(32),
          fontFamily: title700
        },
      }}
    >
      <Screen name="Home" component={Home} options ={{ title: user.nickName }}/>

      <Screen name="AccountGroup" component={AccountGroup} />

      <Screen name="Profile" component={Profile} />

    </Navigator>
  );
};

