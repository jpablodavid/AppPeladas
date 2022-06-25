import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Background } from "../../components/Background";
import { useAuth } from "../../hooks/auth";

import { Card } from "../../components/Card";


export const Profile = () => {

	const navigation = useNavigation();

  const { user } = useAuth();

	function handleGoback() {
    navigation.goBack();
	}

	return (
		<Background>
			<ButtonText style={styles.goBack} onPress={handleGoback}>
				<Entypo name="chevron-left" size={24} color="black" />
			</ButtonText>
      <Card data={user}/>
		</Background>
	);
};
