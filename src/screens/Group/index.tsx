import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";

import GroupSvg from "../../assets/duel.svg";
import PerfilSvg from "../../assets/fun.svg";

import { Avatar } from "../../components/Avatar";
import { ButtonAccess } from "../../components/ButtonAccess";

//função importada
import { Button } from "../../components/Button";
import { theme } from "../../global/styles/theme";
import { Background } from "../../components/Background";

const { primary100 } = theme.colors;

export const Group = () => {
  const navigation = useNavigation();

  const { user, group } = useAuth();

  const [openModal, setOpenModal] = useState(false);

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleGoback() {
    navigation.goBack();
	}

  function handleAcessAccounting() {
    navigation.navigate("Accounting");
  }

  function handleAcessGroup() {
    navigation.navigate("AcessGroup")
  }

  return (
    <Background>
      <View style={styles.avatar}>
        <Avatar urlImage={user.avatar} />
      </View>
      <View style={styles.button}>
        <Button color={primary100} text={'Iniciar Pelada'}/>
      </View>
      <View style={styles.content}>
        <ButtonAccess
          title={"Acessar"}
          text={
            "Visualize as informações do grupo"
          }
          icon={GroupSvg}
          onPress={handleAcessGroup}
        />
        <ButtonAccess
          title={"Contabilidade"}
          text={"Saiba tudo sobre as finanças do grupo"}
          icon={PerfilSvg}
          onPress={handleAcessAccounting}
        />
      </View>
    </Background>
  );
};
