import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
	View,
	Text,
	Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { ProgressBar } from "../../components/ProgressBar";
import { Background } from "../../components/Background";
import { useAuth } from "../../hooks/auth";

import { User } from '../../hooks/auth'

//funçoes importada
import { nivelUser } from "../../global/Data/itens";
import { siglaPosition } from "../../global/Data/itens";

type Props = {
	data: User;
};
export const Card = ({data} : Props) => {

	const navigation = useNavigation();

	return (
    <View style={styles.card}>
      <LinearGradient
        style={styles.perfil}
        colors={[
          theme.colors.primary100,
          theme.colors.primary75,
          theme.colors.primary100,
        ]}
      >
        <LinearGradient
          style={styles.range}
          colors={["#00000085", "#00000000"]}
        >
          <Text style={styles.camisa}>{data.camisa}</Text>
          <Text style={styles.position}>{siglaPosition(data.position)}</Text>
          <Image
            style={styles.bandeira}
            source={require(`../../assets/${data.team}.png`)}
          />
        </LinearGradient>
        <Image
          style={styles.avatar}
          source={{uri: `${data.avatar}`}}
        />
      </LinearGradient>

      <LinearGradient
        style={styles.scout}
        colors={[
          theme.colors.secondary,
          theme.colors.secondary75,
          theme.colors.secondary,
        ]}
      >
        <View style={styles.name}>
          <Text style={styles.textName}>{data.nickName}</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.progress}>
            <ProgressBar text={nivelUser(data.xp)} number={Number(data.xp)} inPerfil />
          </View>
          <View style={styles.data}>
            <Text style={styles.textData}>{data.gols} Gols</Text>
            <Text style={styles.textData}>{data.partidas} Jogos</Text>
            <Text style={styles.textData}>{data.stars} Nota</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
	);
};
