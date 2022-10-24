import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";

import { FontAwesome5 } from "@expo/vector-icons";
import GroupSvg from "../../assets/duel.svg";
import PerfilSvg from "../../assets/fun.svg";

import { Scout } from "../../components/Scout";
import { ButtonAccess } from "../../components/ButtonAccess";
import { ProgressBar } from "../../components/ProgressBar";

//função importada
import { nivelUser } from "../../global/Data/itens";
import { Background } from "../../components/Background";

export const Home = () => {
  const navigation = useNavigation();

  const { user } = useAuth();

  const [openModal, setOpenModal] = useState(false);

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleAcessProfile() {
    navigation.navigate("Profile");
  }

  function handleAccounting() {
    //user.grupo_id ? navigation.navigate("Accounting") : setOpenModal(true);
    navigation.navigate("Accounting");
  }

  function handleAccountGroup() {
    //user.grupo_id ? navigation.navigate("Accounting") : setOpenModal(true);
    navigation.navigate("AccountGroup");
  }

  function handleJoinGroup() {
    setOpenModal(false);
    navigation.navigate("JoinGroup");
  }

  return (
    <Background>
      <View style={styles.containerHome}>
        <View style={styles.avatar}>
          <View style={styles.infoBody}>
            <View style={styles.info}>
              <Text style={styles.textPosition}>{user.position}</Text>
              <View style={styles.camisa}>
                <FontAwesome5 name="tshirt" size={90} color="black" />
                <Text style={styles.textCamisa}>{"10"}</Text>
              </View>
            </View>
            <View style={styles.scout}>
              <ProgressBar text={nivelUser(user.xp)} number={Number(user.xp)} inPerfil={false} />
              <Scout text={"Partidas"} number={user.partidas} />
              <Scout text={"Gols"} number={user.gols} />
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.buttonsContainer}>
            <ButtonAccess
              title={"Pagamentos"}
              icon={"stadium"}
              onPress={handleAccounting}
            />
            <ButtonAccess
              title={"Mensagem"}
              icon={"stadium"}
              onPress={handleAcessProfile}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonAccess
              title={"Contabil"}
              icon={"stadium"}
              onPress={handleAccountGroup}
            />
            <ButtonAccess
              title={"Perfil"}
              icon={"stadium"}
              onPress={handleAcessProfile}
            />
          </View>
        </View>
      </View>
    </Background>
  );
};
