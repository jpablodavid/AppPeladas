import React, { useState } from "react";
import { View, Text, Image, ModalProps, Modal, Dimensions } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import Carousel from 'react-native-reanimated-carousel';
import { Group, useAuth } from "../../hooks/auth";
import { Months } from "../../utils/collectionMonths";
import { ButtonText } from "../ButtonText";
import { Photo } from "../Photos";

import { styles } from "./styles";

const width = Dimensions.get('window').width;

type Props = RectButtonProps & ModalProps & {
	data: Group;
};

export const Gallery = ({data}: Props) => {

  const galeria = [
    "https://i.pinimg.com/564x/07/41/e7/0741e70775144e2fcb6d1904dbca491f.jpg",
    "https://i.pinimg.com/564x/14/c4/af/14c4af765dc7667d8957cbf2cadb5bbb.jpg",
    'https://i.pinimg.com/564x/14/c4/af/14c4af765dc7667d8957cbf2cadb5bbb.jpg',
    'https://i.pinimg.com/564x/14/c4/af/14c4af765dc7667d8957cbf2cadb5bbb.jpg',
    "https://i.pinimg.com/564x/07/41/e7/0741e70775144e2fcb6d1904dbca491f.jpg",
    "https://i.pinimg.com/564x/07/41/e7/0741e70775144e2fcb6d1904dbca491f.jpg",
    'https://i.pinimg.com/564x/14/c4/af/14c4af765dc7667d8957cbf2cadb5bbb.jpg',
    'https://i.pinimg.com/564x/14/c4/af/14c4af765dc7667d8957cbf2cadb5bbb.jpg',
    "https://i.pinimg.com/564x/07/41/e7/0741e70775144e2fcb6d1904dbca491f.jpg",
    "https://i.pinimg.com/564x/07/41/e7/0741e70775144e2fcb6d1904dbca491f.jpg",
    'https://i.pinimg.com/564x/14/c4/af/14c4af765dc7667d8957cbf2cadb5bbb.jpg',
    'https://i.pinimg.com/564x/14/c4/af/14c4af765dc7667d8957cbf2cadb5bbb.jpg',
    "https://i.pinimg.com/564x/07/41/e7/0741e70775144e2fcb6d1904dbca491f.jpg"
  ]

  const { group, user } = useAuth();

	const [openModal, setOpenModal] = useState(false);

  const photoModal = String;

  function handleCloseModal() {
    setOpenModal(false);

  }

  function handlerOpenModal() {
    setOpenModal(true);
  }

	return (
		<View style={styles.container}>
			<View style={styles.galeria}>
        {galeria.map((item) => (
          <Photo data={item}/>
        ))}
      </View>
		</View>
	);
};
