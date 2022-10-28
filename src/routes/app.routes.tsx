import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTabBarButton } from "../components/CustomTabBarButton";
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { HomeRoutes } from "../routes/home.routes";
import { JoinGroup } from "../screens/JoinGroup";
import { MyAccount } from "../screens/MyAccount";
import { GroupRoutes } from "./group.routes";
import { CreateGroup } from "../screens/CreateGroup";

import { useAuth } from "../hooks/auth";

import { theme } from "../global/styles/theme";


const Tab = createBottomTabNavigator();

export const AppRoutes = () => {

  const { user } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle:{
          backgroundColor:theme.colors.tabColor,
          borderBottomLeftRadius: 36,
        },
        headerTitleStyle:{
          marginLeft: 8,
          fontSize: 32,
          fontFamily: theme.fonts.title700
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 20,
          margin: 16,
          backgroundColor: theme.colors.tabColor,
          height: 64,
        }
      }}
    >
      <Tab.Screen name="HomeRoutes" component={HomeRoutes}
        options ={{ headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: "center", padding: 8,borderRadius: 20,backgroundColor: focused ?  theme.colors.tabColorFocused : theme.colors.tabColor}}>
              <MaterialCommunityIcons name="stadium" size={24} color={theme.colors.tabIcon}/>
              <Text style={{ color: theme.colors.tabIcon, fontSize: 12, fontWeight: "bold"}}>
                HOME
              </Text>
            </View>
          )
        }}
			/>

      <Tab.Screen name="GroupRoutes" component={GroupRoutes}
      options ={{ headerShown: false,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center", padding: 8,borderRadius: 20,backgroundColor: focused ?  theme.colors.tabColorFocused : theme.colors.tabColor}}>
            <MaterialCommunityIcons name="account-group" size={24} color={theme.colors.tabIcon} />
            <Text style={{ color: theme.colors.tabIcon, fontSize: 12, fontWeight: "bold"}}>
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

      <Tab.Screen name="CreateGroup" component={CreateGroup}
      options ={{ title: user.name,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center", padding: 8,borderRadius: 20,backgroundColor: focused ?  theme.colors.tabColorFocused : theme.colors.tabColor}}>
            <MaterialCommunityIcons name="android-messages" size={24} color={theme.colors.tabIcon} />
            <Text style={{ color: theme.colors.tabIcon, fontSize: 12, fontWeight: "bold"}}>
              MSG
            </Text>
          </View>
        )
      }}/>

      <Tab.Screen name="MyAccount" component={MyAccount}
      options ={{ title: 'Minha Conta',
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center",borderLeftWidth: 3, borderColor: focused ?  theme.colors.background : theme.colors.disable10, paddingLeft: 10, marginRight: 10}}>
            <MaterialCommunityIcons name="cog" size={24} color={focused ?  theme.colors.background : theme.colors.tabIcon} />
            <Text style={{ color: focused ?  theme.colors.background : theme.colors.tabIcon , fontSize: 12, fontWeight: "bold"}}>
              CONTA
            </Text>
          </View>
        )
      }}/>

    </Tab.Navigator>
  );
};

