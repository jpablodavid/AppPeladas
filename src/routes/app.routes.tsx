import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Home } from "../screens/Home";
import { JoinGroup } from "../screens/JoinGroup";
import { Profile } from "../screens/Profile";
import { MyAccount } from "../screens/MyAccount";
import { Group } from "../screens/Group";

import { useAuth } from "../hooks/auth";
import { CustomTabBarButton } from "../components/CustomTabBarButton";

import { theme } from "../global/styles/theme";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {

  const { user } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle:{
          backgroundColor:theme.colors.tabColor,
          borderBottomLeftRadius: 40,
          padding: 20
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 25,
          margin: 15,
          backgroundColor: theme.colors.tabColor,
          height: 80,
        }
      }}
    >
      <Tab.Screen name="Home" component={Home} options ={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center"}}>
            <MaterialCommunityIcons name="stadium" size={30} color= {focused ? "black" : "white"}/>
            <Text style={{ color: focused ? 'black' : 'white', fontSize: 12}}>
              HOME
            </Text>
          </View>
        )
      }}/>

      <Tab.Screen name="Group" component={Group}  options ={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center"}}>
            <MaterialCommunityIcons name="account-group" size={30} color= {focused ? "black" : "white"}/>
            <Text style={{ color: focused ? 'black' : 'white', fontSize: 12}}>
              GRUPO
            </Text>
          </View>
        )
      }}/>

      <Tab.Screen name="JoinGroup" component={JoinGroup}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton
              onPress={props.onPress}
            />
          )
        }}/>

      <Tab.Screen name="Profile" component={Profile}  options ={{
        tabBarIcon: ({focused}) => (
          <View style={{ alignItems: 'center'}}>
            <MaterialCommunityIcons name="account-reactivate" size={30} color={focused ? "black" : "white"} />
            <Text style={{ color: focused ? 'black' : 'white', fontSize: 12}}>
              PERFIL
            </Text>
          </View>
        )
      }}/>

      <Tab.Screen name="MyAccount" component={MyAccount}
      options ={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center",borderLeftWidth: 3, borderColor: theme.colors.disable10, paddingLeft: 15, marginRight: 10}}>
            <MaterialCommunityIcons name="cog" size={30} color={focused ? "black" : "white"} />
            <Text style={{ color: focused ? 'black' : 'white', fontSize: 12}}>
              CONTA
            </Text>
          </View>
        )
      }}/>

    </Tab.Navigator>
  );
};

