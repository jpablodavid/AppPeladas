import React from "react";
import { View, Text, Image} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { useAuth } from "../../hooks/auth";

import { ButtonAccess } from "../../components/ButtonAccess";
import { ProgressBar } from "../../components/ProgressBar";
//função importada
import { nivelUser } from "../../global/Data/itens";
import { Background } from "../../components/Background";

import { styles } from "./styles";


export const Home = ({navigation}) => {

  const { user } = useAuth();

  function handleAcessProfile() {
    navigation.navigate("Profile");
  }

  function handleAccountGroup() {
    navigation.navigate("AccountGroup");
  }

  return (
    <Background>
      <View style={styles.container}>
          <View style={styles.left}>
            <Text style={styles.textPosition}>{user.position}</Text>
            <ProgressBar number={Number(user.xp)} inPerfil={false} />
            <View>
              <Image style={styles.image} source={require("../../assets/person.png")} />
              <Text style={styles.nivel}>{nivelUser(user.xp)}</Text>
            </View>
          </View>
          <View style={styles.right} >
            <View style={styles.camisa}>
              <FontAwesome5 name="tshirt" size={110} color="black" />
              <Text style={styles.textCamisa}>{"10"}</Text>
            </View>
            <View>
              <Text style={styles.scout}>{user.gols}</Text>
              <Text style={styles.scoutText}>Gols</Text>
              <Text style={styles.scout}>{user.partidas}</Text>
              <Text style={styles.scoutText}>Partidas</Text>
            </View>
          </View>
      </View>
      <View style={styles.buttonsContainer}>
          <ButtonAccess
            title={"Contabilidade"}
            icon={"cash"}
            onPress={handleAccountGroup}
          />
          <ButtonAccess
            title={"Perfil"}
            icon={"account-reactivate"}
            onPress={handleAcessProfile}
          />
        </View>
    </Background>
  );
};
