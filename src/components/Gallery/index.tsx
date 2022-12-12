import React from "react";
import { View } from "react-native";
import { Group } from "../../hooks/auth";
import { Photo } from "../Photos";

import { styles } from "./styles";


type Props = {
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

	return (
		<View style={styles.container}>
			<View style={styles.galeria}>
        {galeria.map((item, index) => (
          <Photo key={index} data={item}/>
        ))}
      </View>
		</View>
	);
};
