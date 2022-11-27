import React from "react";
import { View } from "react-native";

import { Background } from "../../components/Background";
import { Card } from "../../components/Card";

import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";

export const Profile = ({navigation}) => {

  const { user } = useAuth();

	function handleGoback() {
    navigation.goBack();
	}

	return (
    <Background>
      <View style={styles.container}>
        <Card data={user}/>
      </View>
    </Background>
	);
};
