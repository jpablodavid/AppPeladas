import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";

import { FontAwesome5 } from "@expo/vector-icons";
import GroupSvg from "../../assets/duel.svg";
import PerfilSvg from "../../assets/fun.svg";

import { Scout } from "../../components/Scout";
import { Header } from "../../components/Header";
import { Avatar } from "../../components/Avatar";
import { ButtonAccess } from "../../components/ButtonAccess";
import { CategoriesBackground } from "../../components/CategoriesBackground";
import { ProgressBar } from "../../components/ProgressBar";
import { ModalNoGroup } from "../../components/ModalNoGroup";
//função importada
import { nivelUser } from "../../global/Data/itens";

export const Home = () => {
  const navigation = useNavigation();

  let temJogo = false;

  const { user } = useAuth();

  const [openModal, setOpenModal] = useState(false);

  function handleOpenDrawer() {
    navigation.openDrawer();
  }

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
    <View style={styles.container}>
      <Header menu openMenu={handleOpenDrawer} title={user.nickName} />
      <CategoriesBackground>
        <View style={styles.avatar}>
          <Avatar urlImage={user.avatar} />
          <View style={styles.infoBody}>
            <View style={styles.info}>
              <Text style={styles.textPosition}>{user.position}</Text>
              <View style={styles.camisa}>
                <FontAwesome5 name="tshirt" size={50} color="black" />
                <Text style={styles.textCamisa}>{user.camisa}</Text>
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
            //icon={GroupSvg}
            onPress={handleAcessGroup}
          />
          <ButtonAccess
            title={"Perfil"}
            text={"Veja suas conquistas, gols, score, partidas"}
            //icon={PerfilSvg}
            onPress={handleAcessProfile}
          />
          <View style={styles.jogoContainer}>
            {temJogo ? (
              <Text> Tem jogo</Text>
            ) : (
              <Text style={styles.textJogo}>Sem Partidas no momento</Text>
            )}
          </View>
        </View>
      </CategoriesBackground>
      <ModalNoGroup
        visible={openModal}
        setOpenModal={handleCloseModal}
        goToEntrar={handleJoinGroup}
        goToCriar={handleCreateGroup}
      />
    </View>
  );
};
