import React from "react";
import { View, Text, Image } from "react-native";
import {
  DrawerContentScrollView
} from '@react-navigation/drawer';

import { styles } from "./styles";

import { ButtonDrawer } from "../ButtonDrawer";
import { useAuth } from "../../hooks/auth";

export const CustomDrawer = ({ navigation }) => {

  const{ user, logOut} = useAuth();

  function handleOut(){
    logOut();
    navigation.navigate('SignIn');
  }

  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.menu}>
        <Image style={styles.avatar} source={{ uri: `${user.avatar}`}} />
        <Text style={styles.title}>{user.nickName}</Text>
      </View>
      <View style={styles.content}>
        <View>
          <ButtonDrawer  text={"Home"} onPress={() => navigation.navigate('Home')} />
        </View>

        <View>
        <ButtonDrawer  text={"Criar Grupo"} onPress={() => navigation.navigate('CreateGroup')} />

        </View>

        <View>
          {
            user.grupo_id ?
              <ButtonDrawer  text={"Acessar Grupo"} onPress={() => navigation.navigate('Group')} />
            :
              <ButtonDrawer disable text={"AcessGroup"}  onPress={() => alert('Você não participa de nenhum grupo')}/>
          }

        </View>

        <View>
          {
            !user.grupo_id ?
            <ButtonDrawer  text={"JoinGroup"} onPress={() => navigation.navigate('JoinGroup')} />
          :
            <ButtonDrawer disable text={"JoinGroup"}  onPress={() => alert('Você já participa de um grupo')}/>
          }
          </View>

        <View>
          <ButtonDrawer  text={"Minha Conta"} onPress={() => navigation.navigate('MyAccount')} />
        </View>

        <View>
          <ButtonDrawer text={"Sair"} onPress={handleOut} />
        </View>
      </View>
    </DrawerContentScrollView >
  );
};
