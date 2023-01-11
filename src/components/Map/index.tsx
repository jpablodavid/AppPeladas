import React, { useEffect, useState } from "react";
import { View, Text, Platform, Linking, Keyboard} from "react-native";

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker } from 'react-native-maps';

import { Button } from "../Button";
import { KEY } from "../../configs/googleConfig";

import { Group, useAuth } from "../../hooks/auth";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
	data: Group;
};


export const Map = ({ data }: Props) => {

  const { secondary } = theme.colors;

  const { addLocation } = useAuth();

  const[local, setLocal]  = useState({
    latitude: 0,
    longitude: 0
  })

  function comoChegar(){
    let text: string;
    if(Platform.OS === "ios"){
      text = "http://maps.apple.com/?ll=" + data.location.latitude + "," + data.location.longitude;
    }else{
      //text = "geo: " + local.latitude + "," + local.longitude;
      text = "geo:-22.85667719396673,-43.352891249282195";
    }
    Linking.openURL(text);
  }

  function getLocation(){

  }

  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [keyboardStatus]);

	return (
		<View style={styles.container}>
      {
        !keyboardStatus &&
        <MapView
          style={styles.map}
          initialRegion={{
            latitude:  data.location.latitude,
            longitude:  data.location.longitude,
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
      }
      { data.location.latitude ?
        <View>
          <Text style={styles.address}>
            {data.location.adress}
          </Text>
          <View style={styles.buttonsContainer}>
            <Button color={secondary} text={"Como chegar"} onPress={comoChegar}></Button>
          </View>
        </View>
        :
        <View style={styles.search}>
          <GooglePlacesAutocomplete
            placeholder='Procurar Endereço'
            onPress={(data, details = null) => {
              setLocal({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng
              });
              addLocation(data.description, local.latitude, local.longitude, data.id);
              console.log("oi");
            }}
            query={{
              key: {KEY},
              language: 'pt-br',
            }}
            fetchDetails={true}
            styles={{listView:{ heigth: 300}}}
          />
        </View>
      }

		</View>
	);
};
