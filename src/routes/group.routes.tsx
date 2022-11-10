import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Group } from "../screens/Group";

import { useAuth } from "../hooks/auth";

import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export const  GroupRoutes = () => {

  const { group } = useAuth();

  return (
    <Navigator
      initialRouteName='Group'
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
      }}
    >

      <Screen name="Group" component={Group} options ={{ title: group ? group.name : 'Grupo' }}/>

    </Navigator>
  );
};

