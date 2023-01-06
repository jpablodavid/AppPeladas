import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTabBarButton } from "../components/CustomTabBarButton";
import { Linking, Text, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAuth } from "../hooks/auth";

import { HomeRoutes } from "../routes/home.routes";
import { JoinGroup } from "../screens/JoinGroup";
import { MyAccount } from "../screens/MyAccount";
import { GroupRoutes } from "./group.routes";
import { CreateGroup } from "../screens/CreateGroup";

import { theme } from "../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { Msg } from "../screens/Msg";

const Tab = createBottomTabNavigator();

export const AppRoutes = () => {

  const { tabColor, tabIcon, tabColorFocused, background, disable10 } = theme.colors;
  const { title700 } = theme.fonts;

  const { user } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle:{
          backgroundColor:tabColor,
          borderBottomLeftRadius: 36,
        },
        headerTitleStyle:{
          marginLeft: 8,
          fontSize: RFValue(32),
          fontFamily: title700
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 20,
          margin: 16,
          backgroundColor: tabColor,
          height: 64,
        }
      }}
    >
      <Tab.Screen name="HomeRoutes" component={HomeRoutes}
        options ={{ headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: "center", padding: 8,borderRadius: 20,backgroundColor: focused ?  tabColorFocused : tabColor}}>
              <MaterialCommunityIcons name="stadium" size={24} color={tabIcon}/>
              <Text style={{ color: tabIcon, fontSize: RFValue(12), fontWeight: "bold"}}>
                HOME
              </Text>
            </View>
          )
        }}
			/>

      <Tab.Screen name="GroupRoutes" component={GroupRoutes}
      options ={{ headerShown: false,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center", padding: 8,borderRadius: 20,backgroundColor: focused ?  tabColorFocused : tabColor}}>
            <MaterialCommunityIcons name="account-group" size={24} color={tabIcon} />
            <Text style={{ color: tabIcon, fontSize: RFValue(12), fontWeight: "bold"}}>
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

      <Tab.Screen name="Msg" component={Msg}
      options ={{ title: "Mensagens",
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center", padding: 8,borderRadius: 20,backgroundColor: focused ?  tabColorFocused : tabColor}}>
            <MaterialCommunityIcons name="android-messages" size={24} color={tabIcon} />
            <Text style={{ color: tabIcon, fontSize: RFValue(12), fontWeight: "bold"}}>
              MSG
            </Text>
          </View>
        )
      }}/>

      <Tab.Screen name="MyAccount" component={MyAccount}
      options ={{ title: 'Minha Conta',
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center",borderLeftWidth: 3, borderColor: focused ?  background : disable10, paddingLeft: 10, marginRight: 10}}>
            <MaterialCommunityIcons name="cog" size={24} color={focused ?  background : tabIcon} />
            <Text style={{ color: focused ?  background : tabIcon , fontSize: RFValue(12), fontWeight: "bold"}}>
              CONTA
            </Text>
          </View>
        )
      }}/>

    </Tab.Navigator>
  );
};

