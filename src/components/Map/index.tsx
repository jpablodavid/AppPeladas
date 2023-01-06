import React, { useState } from "react";
import { View, Text, Platform, Linking } from "react-native";

import MapView, { Marker } from 'react-native-maps';

import { Button } from "../Button";
import { Group } from "../../hooks/auth";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
	data: Group;
};

export const Map = ({ data }: Props) => {

  const { secondary } = theme.colors;

  const[local, setLocal]  = useState({
    latitude: -22.85667719396673,
    longitude: -43.352891249282195
  })

  function comoChegar(){
    let text: string;
    if(Platform.OS === "ios"){
      text = "http://maps.apple.com/?ll=" + local.latitude + "," + local.longitude;
    }else{
      //text = "geo: " + local.latitude + "," + local.longitude;
      text = "geo:-22.85667719396673,-43.352891249282195";
    }
    Linking.openURL(text);
  }

	return (
		<View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude:  local.latitude,
          longitude:  local.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        zoomEnabled={true}
        loadingEnabled={true}
        provider={"google"}
      >
        <Marker
          coordinate={{ latitude : local.latitude, longitude : local.longitude  }}
          title={data.name}
        />
      </MapView>
      <Text style={styles.address}>
          {data.location}
        </Text>
      <View style={styles.buttonsContainer}>
        <Button color={secondary} text={"Como chegar"} onPress={comoChegar}></Button>
      </View>
		</View>
	);
};
