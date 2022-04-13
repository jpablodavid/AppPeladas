import React from "react";
import { View, Text, Image } from "react-native";
import {
  DrawerContentScrollView
} from '@react-navigation/drawer';

import { styles } from "./styles";

import { ButtonDrawer } from "../ButtonDrawer";
import { useAuth } from "../../hooks/auth";

export const CustomDrawer = ({ navigation }) => {

  const{ user, group , logOut} = useAuth();

  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.menu}>
        <Image style={styles.avatar} source={{ uri: "https://github.com/jpablodavid.png" }} />
        <Text style={styles.title}>{user.nick_name}</Text>
      </View>
      <View style={styles.content}>
        <View>
          <ButtonDrawer  text={"Home"} onPress={() => navigation.navigate('Home')} />
        </View>

        <View>
        <ButtonDrawer  text={"CreateGroup"} onPress={() => navigation.navigate('CreateGroup')} />

        </View>

        <View>
          {
            group ?
              <ButtonDrawer  text={"AcessGroup"} onPress={() => navigation.navigate('AcessGroup')} />
            :
              <ButtonDrawer disable text={"AcessGroup"}  onPress={() => alert('Você não participa de nenhum grupo')}/>
            }

        </View>

        <View>
          <ButtonDrawer  text={"JoinGroup"} onPress={() => navigation.navigate('JoinGroup')} />
        </View>

        <View>
          <ButtonDrawer  text={"Profile"} onPress={() => navigation.navigate('Profile')} />
        </View>

        <View>
          <ButtonDrawer text={"Sair"} onPress={logOut} />
        </View>
      </View>
    </DrawerContentScrollView >
  );
};
