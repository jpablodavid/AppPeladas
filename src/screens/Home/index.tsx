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

  function handleAcessGroup() {
    user.grupo_id ? navigation.navigate("Group") : setOpenModal(true);
  }

  function handleJoinGroup() {
    setOpenModal(false);
    navigation.navigate("JoinGroup");
  }

  function handleCreateGroup() {
    setOpenModal(false);
    navigation.navigate("CreateGroup");
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
          <ButtonAccess
            title={"Grupo"}
            text={
              "Forme seu grupo, inicie uma partida, cadastre jogadores e der suas notas"
            }
            icon={GroupSvg}
            onPress={handleAcessGroup}
          />
          <ButtonAccess
            title={"Perfil"}
            text={"Veja suas conquistas, gols, score, partidas"}
            icon={PerfilSvg}
            onPress={handleAcessProfile}
          />
        </View>
      </View>
    </Background>
  );
};
