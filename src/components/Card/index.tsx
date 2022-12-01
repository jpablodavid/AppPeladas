import React, { useEffect, useState } from "react";
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

import { User } from '../../hooks/auth'

//funçoes importada
import { siglaPosition } from "../../global/Data/itens";

type Props = {
	data: User;
};

export const Card = ({data} : Props) => {

  const { black, black000 } = theme.colors;

  const [color, setColor] = useState("black");

  function chanceColor(start: string) {
    if (start === '3') {
      setColor(theme.colors.tabColor)
    }
  }

  useEffect(() => {
    chanceColor(data.stars);
  }, []);


	return (
    <>
      <View style={styles.card}>
        <LinearGradient
          style={styles.perfil}
          colors={[
            theme.colors.primary100,
            theme.colors.background,
          ]}
        >
          <LinearGradient
            style={styles.range}
            colors={[black, black000]}
          >
            <Text style={styles.camisa}>{10}</Text>
            <Text style={styles.position}>{siglaPosition(data.position)}</Text>
            <Image
              style={styles.bandeira}
              source={require(`../../assets/Flamengo.png`)}
              //source={require(`../../assets/${data.team}.png`)}
            />
          </LinearGradient>
          <View style={{justifyContent: 'center'}}>
          <Image
            style={styles.avatar}
            source={{uri: `${data.avatar}`}}
          />
          </View>
        </LinearGradient>

        <LinearGradient
          style={styles.scout}
          colors={[
            theme.colors.secondary,
            theme.colors.tabIcon,
          ]}
        >
          <View style={styles.name}>
            <Text style={styles.textName}>{data.nickName}</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.progress}>
              <ProgressBar number={Number(data.xp)} inPerfil />
            </View>
            <View style={styles.data}>
              <View style={styles.containerText}>
                <Text style={styles.scoutData}>{data.gols}</Text>
                <Text style={styles.textData}>Gols</Text>
              </View>
              <View style={styles.containerText}>
                <Text style={styles.scoutData}>{data.partidas}</Text>
                <Text style={styles.textData}>Jogos</Text>
              </View>
              <View style={styles.containerText}>
                <Text style={styles.scoutData}>{data.stars}</Text>
                <Text style={styles.textData}>Nota</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.icons}>
      <ButtonText>
        <Entypo
          style={{ marginHorizontal: 18, marginBottom: 16 }}
          name="attachment"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText>
        <Entypo
          style={{ marginHorizontal: 18 }}
          name="awareness-ribbon"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText>
        <Entypo
          style={{ marginHorizontal: 18 }}
          name="battery"
          size={40}
          color={color}
        />
      </ButtonText>
      <ButtonText>
        <Entypo
          style={{ marginHorizontal: 18 }}
          name="briefcase"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText>
        <Entypo
          style={{ marginHorizontal: 18 }}
          name="bucket"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText>
        <Entypo
          style={{ marginHorizontal: 12 }}
          name="bug"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText>
        <Entypo
          style={{ marginHorizontal: 12 }}
          name="bug"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText>
        <Entypo
          style={{ marginHorizontal: 12 }}
          name="bug"
          size={40}
          color="black"
        />
      </ButtonText>
    </View>
  </>
	);
};
