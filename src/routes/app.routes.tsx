import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image } from 'react-native';

import { AcessGroup } from "../screens/AcessGroup";
import { CreateGroup } from "../screens/CreateGroup";
import { Home } from "../screens/Home";
import { JoinGroup } from "../screens/JoinGroup";
import { Profile } from "../screens/Profile";
import { MyAccount } from "../screens/MyAccount";

import { useAuth } from "../hooks/auth";
import { Group } from "../screens/Group";
import { Accounting } from "../screens/Accounting";
import { CustomTabBarButton } from "../components/CustomTabBarButton";

import { theme } from "../global/styles/theme";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {

  const { user } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 4,
          borderTopLeftRadius: 15,
          borderTopRightRadius:15,
          backgroundColor: theme.colors.background,
          height: 90,
        }
      }}
    >
      <Tab.Screen name="Home" component={Home} options ={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center", justifyContent: "center"}}>
            <Image
              source={require('../assets/home.png')}
              resizeMode="contain"
              style={{
                width: 60,
                height: 60,
                tintColor: focused ? '#fffff' : '#748c94'
              }}
            />
            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
              HOME
            </Text>
          </View>
        )
      }}/>

      <Tab.Screen name="CreateGroup" component={CreateGroup}  options ={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center", justifyContent: "center", top: 0}}>
            <Image
              source={require('../assets/1.png')}
              resizeMode="contain"
              style={{
                width:50,
                height: 50,
                tintColor: focused ? '#fffff' : '#748c94'
              }}
            />
            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
              HOME
            </Text>
          </View>
        )
      }}/>

      <Tab.Screen name="JoinGroup" component={JoinGroup}
        options={{
          /* tabBarIcon: ({focused}) => (
            <Image
            source={require('../assets/1.png')}
            resizeMode="contain"
            style={{
              width:30,
              height: 30,
              //tintColor: '#fff'
            }}
          />
          ), */
          tabBarButton: (props) => (
            <CustomTabBarButton
              onPress={props.onPress}
            />
          )
        }}
      />

      <Tab.Screen name="Group" component={Group}  options ={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center", justifyContent: "center", top: 10}}>
            <Image
              source={require('../assets/header.png')}
              resizeMode="contain"
              style={{
                width:25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
              HOME
            </Text>
          </View>
        )
      }}/>

      <Tab.Screen name="AcessGroup" component={AcessGroup}  options ={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center", justifyContent: "center", top: 10}}>
            <Image
              source={require('../assets/header.png')}
              resizeMode="contain"
              style={{
                width:25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
              HOME
            </Text>
          </View>
        )
      }}/>

      {/* <Tab.Screen name="Accounting" component={Accounting} />

      <Tab.Screen name="Profile" component={Profile} />

      <Tab.Screen name="MyAccount" component={MyAccount} /> */}

    </Tab.Navigator>
  );
};

