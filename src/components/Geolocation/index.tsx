import React ,{useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Location from 'expo-location';

import { styles } from "./styles";

export const Geolocation = () => {

  const [latitude, setLatitude] = useState(0);

  const [longitude, setLongitude] = useState(0);

  async function getLocal(){
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert("error: Não foi possivel")
    }

    let location = await Location.getCurrentPositionAsync({});
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
  }

	return(
  <View style={styles.container}>
    <TouchableOpacity onPress={getLocal}>
      <Text>Clique</Text>
    </TouchableOpacity>
    <Text>
        {latitude}
    </Text>

    <Text>
        {longitude}
    </Text>
  </View>
  );
};
