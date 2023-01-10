import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RFValue } from "react-native-responsive-fontsize";
import { useAuth } from "../hooks/auth";

import { Group } from "../screens/Group";
import { JoinGroup } from "../screens/JoinGroup";
import { CreateGroup } from "../screens/CreateGroup";

import { theme } from "../global/styles/theme";
import { Button } from "../components/Button";


const { Navigator, Screen } = createStackNavigator();

export const  GroupRoutes = () => {

  const { tabColor } = theme.colors;
  const { title700 } = theme.fonts;

  const { group } = useAuth();

  return (
    <Navigator
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

      <Screen name="Group" component={Group} options={{ title: group ? group.name : 'Grupo'}} />

      <Screen name="JoinGroup" component={JoinGroup} options={{ title: 'Procurar Grupo' }} />

      <Screen name="CreateGroup" component={CreateGroup} options={{ title: "Criar Grupo"}}/>

    </Navigator>
  );
};

