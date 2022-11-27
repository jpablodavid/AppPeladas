import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../hooks/auth";

import { Group } from "../screens/Group";
import { JoinGroup } from "../screens/JoinGroup";
import { CreateGroup } from "../screens/CreateGroup";

import { theme } from "../global/styles/theme";


const { Navigator, Screen } = createStackNavigator();

export const  GroupRoutes = () => {

  const { group } = useAuth();

  return (
    <Navigator
      initialRouteName= "Group"
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

      <Screen name="Group" component={Group} options={{ title: group ? group.name : 'Grupo' }}/>

      <Screen name="JoinGroup" component={JoinGroup} options={{ title: 'Procurar Grupo' }}/>

      <Screen name="CreateGroup" component={CreateGroup} options={{ title: "Criar Grupo"}}/>

    </Navigator>
  );
};

