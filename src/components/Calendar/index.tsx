import React, { useState } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";

export const Calendar = ({data}) => {

  const { group, user } = useAuth();

	const [openModal, setOpenModal] = useState(false);

	function handleOpenModal(){
		setOpenModal(true);
	}

	return (
		<View style={styles.container}>
			<Text>Calendario</Text>
		</View>
	);
};
