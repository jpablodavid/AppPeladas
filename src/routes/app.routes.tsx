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

  const { user, group } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle:{
          backgroundColor:theme.colors.tabColor,
          borderBottomLeftRadius: 36,
        },
        headerTitleStyle:{
          marginLeft: 16,
          fontSize: 36,
          fontFamily: theme.fonts.title700
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 24,
          margin: 16,
          backgroundColor: theme.colors.tabColor,
          height: 80,
        }
      }}
    >
      <Tab.Screen name="Home" component={Home}
      options ={{ title: user.nickName,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center", padding: 8,borderRadius: 15,backgroundColor: focused ?  theme.colors.tabColorFocused : theme.colors.tabColor}}>
            <MaterialCommunityIcons name="stadium" size={30} color={theme.colors.tabIcon}/>
            <Text style={{ color: theme.colors.tabIcon, fontSize: 14}}>
              HOME
            </Text>
          </View>
        )
      }}/>

      <Tab.Screen name="Group" component={Group}
      options ={{ title: group ? group.name : 'Grupo',
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center", padding: 8,borderRadius: 15,backgroundColor: focused ?  theme.colors.tabColorFocused : theme.colors.tabColor}}>
            <MaterialCommunityIcons name="account-group" size={30} color={theme.colors.tabIcon} />
            <Text style={{ color: theme.colors.tabIcon, fontSize: 14}}>
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

      <Tab.Screen name="Profile" component={Profile}
      options ={{ title: user.name,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center", padding: 8,borderRadius: 15,backgroundColor: focused ?  theme.colors.tabColorFocused : theme.colors.tabColor}}>
            <MaterialCommunityIcons name="account-reactivate" size={30} color={theme.colors.tabIcon} />
            <Text style={{ color: theme.colors.tabIcon, fontSize: 14}}>
              PERFIL
            </Text>
          </View>
        )
      }}/>

      <Tab.Screen name="MyAccount" component={MyAccount}
      options ={{ title: 'Minha Conta',
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center",borderLeftWidth: 3, borderColor: focused ?  theme.colors.background : theme.colors.disable10, paddingLeft: 15, marginRight: 10}}>
            <MaterialCommunityIcons name="cog" size={30} color={focused ?  theme.colors.background : theme.colors.tabIcon} />
            <Text style={{ color: focused ?  theme.colors.background : theme.colors.tabIcon , fontSize: 14}}>
              CONTA
            </Text>
          </View>
        )
      }}/>

    </Tab.Navigator>
  );
};

