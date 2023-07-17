import React, { useEffect, useRef, useState } from "react";
import {
	View,
	Text,
	Image,
  Modal,
	ModalProps,
  TouchableWithoutFeedback
} from "react-native";
import {Camera, CameraType} from 'expo-camera';
import { Entypo } from "@expo/vector-icons";

import { ProgressBar } from "../../components/ProgressBar";
import { ButtonText } from "../../components/ButtonText";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

import { useAuth, User } from '../../hooks/auth'

//funçoes importada
import { bandeira, siglaPosition } from "../../global/Data/itens";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = ModalProps & {
	data: User;
};

export const Card = ({data} : Props) => {

  const { createPictureAvatar } = useAuth();

  const { black, disable10, secondary, tabIcon, shadow } = theme.colors;

  const [color, setColor] = useState("black");

  const [badges, setBadges] = useState("Explicar como funciona o badges");

  const [photo, setPhoto] = useState<null | string>(null);

  const [openModal, setOpenModal] = useState(false);

  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleOpenModal(badge: string) {
    setOpenModal(true);
    setBadges(badge);
  }

  function chanceColor(start: string) {
    if (start === '3') {
      setColor(theme.colors.tabColor)
    }
  }

  const cameraRef = useRef<Camera>(null);

  async function handleTakePicture() {
    const photo = await cameraRef.current.takePictureAsync();
    setPhoto(photo.uri);
    createPictureAvatar(photo.uri);
  }

  useEffect(() => {
    chanceColor(data.stars);
    Camera.requestCameraPermissionsAsync()
    .then(response => setHasCameraPermission(response.granted));
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
            { data.avatar || photo ?
              <Image
                style={styles.avatar}
                source={{uri: `${data.avatar || photo}`}}
              />
              :
              <TouchableOpacity onPress={handleTakePicture} disabled={hasCameraPermission}>
                {
                  hasCameraPermission ?
                  <Camera
                    ref={cameraRef}
                    style={styles.camera}
                    type={CameraType.front}
                  />
                  :
                  <View style={styles.camera}>
                    <Text>Sem autorização do uso da camera</Text>
                  </View>
                }

              </TouchableOpacity>
            }
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
      <ButtonText onPress={()=> handleOpenModal("grampo")}>
        <Entypo
          style={{ marginHorizontal: 18, marginBottom: 16 }}
          name="attachment"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText onPress={()=> handleOpenModal("fita")}>
        <Entypo
          style={{ marginHorizontal: 18 }}
          name="awareness-ribbon"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText onPress={()=> handleOpenModal("pilha")}>
        <Entypo
          style={{ marginHorizontal: 18 }}
          name="battery"
          size={40}
          color={color}
        />
      </ButtonText>
      <ButtonText onPress={()=> handleOpenModal("mala")}>
        <Entypo
          style={{ marginHorizontal: 18 }}
          name="briefcase"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText onPress={()=> handleOpenModal("balde")}>
        <Entypo
          style={{ marginHorizontal: 18 }}
          name="bucket"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText onPress={()=> handleOpenModal("barata")}>
        <Entypo
          style={{ marginHorizontal: 12 }}
          name="bug"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText onPress={()=> handleOpenModal("barata2")}>
        <Entypo
          style={{ marginHorizontal: 12 }}
          name="bug"
          size={40}
          color="black"
        />
      </ButtonText>
      <ButtonText onPress={()=> handleOpenModal("barata3")}>
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
              <Text style={styles.contentText}>
                {badges}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  </>
	);
};
