import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	Image,
  Modal,
	ModalProps,
  TouchableWithoutFeedback
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { ProgressBar } from "../../components/ProgressBar";
import { ButtonText } from "../../components/ButtonText";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

import { User } from '../../hooks/auth'

//funçoes importada
import { bandeira, siglaPosition } from "../../global/Data/itens";

type Props = ModalProps & {
	data: User;
};

export const Card = ({data} : Props) => {

  const { black, disable10, secondary, tabIcon, shadow } = theme.colors;

  const [color, setColor] = useState("black");

  const [openModal, setOpenModal] = useState(false);

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handlerOpenModal() {
    setOpenModal(true);
  }

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
            colors={[black, shadow, disable10]}
          >
            <Text style={styles.camisa}>{10}</Text>
            <Text style={styles.position}>{siglaPosition(data.position)}</Text>
            <Image
              style={styles.bandeira}
              source={bandeira(data.team)}
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
            secondary,
            tabIcon,
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
      <ButtonText onPress={handlerOpenModal}>
        <Entypo
          style={{ marginHorizontal: 18, marginBottom: 16 }}
          name="attachment"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText onPress={handlerOpenModal}>
        <Entypo
          style={{ marginHorizontal: 18 }}
          name="awareness-ribbon"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText onPress={handlerOpenModal}>
        <Entypo
          style={{ marginHorizontal: 18 }}
          name="battery"
          size={40}
          color={color}
        />
      </ButtonText>
      <ButtonText onPress={handlerOpenModal}>
        <Entypo
          style={{ marginHorizontal: 18 }}
          name="briefcase"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText onPress={handlerOpenModal}>
        <Entypo
          style={{ marginHorizontal: 18 }}
          name="bucket"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText onPress={handlerOpenModal}>
        <Entypo
          style={{ marginHorizontal: 12 }}
          name="bug"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText onPress={handlerOpenModal}>
        <Entypo
          style={{ marginHorizontal: 12 }}
          name="bug"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText onPress={handlerOpenModal}>
        <Entypo
          style={{ marginHorizontal: 12 }}
          name="bug"
          size={40}
          color="black"
        />
      </ButtonText>
      <Modal
        transparent
        animationType="slide"
        statusBarTranslucent
        visible={openModal}>
        <TouchableWithoutFeedback
					onPress={handleCloseModal}
				>
          <View style={styles.modal}>
            <ButtonText onPress={handleCloseModal}>
              <Text style={styles.textButton}>X</Text>
            </ButtonText>
            <View style={styles.contentModal}>
              <Text>
                explica o que é esse icone, quantos pontos vc tem e quantos faltam para alcançar o objetivo
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  </>
	);
};
