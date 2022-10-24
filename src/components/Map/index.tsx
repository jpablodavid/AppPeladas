import React, { useState } from "react";
import { View, Text } from "react-native";

import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import { Button } from "../Button";
import { Group } from "../../hooks/auth";

import { styles } from "./styles";

type Props = {
	data: Group;
};

export const Map = ({data}: Props) => {

  const[local, setLocal]  = useState({
    latitude: 0,
    longitude: 0
  })

	return (
		<View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude:  -22.85667719396673,
          longitude:  -43.352891249282195,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        zoomEnabled={true}
        loadingEnabled={true}
      >
        <Marker
          coordinate={{ latitude : -22.85667719396673, longitude : -43.352891249282195  }}
          //image={{uri: 'custom_pin'}}
        />
      </MapView>
      <Text style={styles.adress}>
          Estrada do sapê, 468 - Bento Ribeiro - RJ
        </Text>
      <View style={styles.buttonsContainer}>
        <Button color={'red'} text={"Como chegar"}></Button>
      </View>
		</View>
	);
};
