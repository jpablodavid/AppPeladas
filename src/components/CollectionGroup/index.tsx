import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import Carousel from 'react-native-reanimated-carousel'
import { useAuth } from "../../hooks/auth";
import { Months } from '../../utils/collectionMonths';

import { styles } from "./styles";

const SLIDER_WIDTH = Dimensions.get('window').width + 0
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={{marginLeft: 18}} key={index}>
      <Text style={styles.title}>{index}</Text>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Arrecadações</Text>
        <Text style={styles.label}>R$ {"1.000,00"}</Text>
        <Text style={styles.title}>Custo</Text>
        <Text style={styles.label}>R$ {"300,00"}</Text>
      </View>
    </View>
  )
}

export const CollectionGroup = ({data}) => {

  const { group } = useAuth();

	return (
		<View style={styles.container}>
      <View style={styles.carrossel}>
        <Carousel
          loop={false}
          width={300}
          height={300}
          autoPlay={true}
          data={Months}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={CarouselCardItem}
        />
      </View>
      <Text style={styles.title}>Anual</Text>
      <Text style={styles.label}>Arrecadações:</Text>
      <View style={styles.money}>
        <Text style={styles.label}> R$</Text>
        <View style={styles.info}>
          <Text style={styles.infoText}>250,00</Text>
        </View>
      </View>
      <Text style={styles.label}>Custos:</Text>
      <View style={styles.money}>
        <Text style={styles.label}> R$</Text>
        <View style={styles.info}>
          <Text style={styles.infoText}>250,00</Text>
        </View>
      </View>
      <Text style={styles.label}>Rendimentos:</Text>
      <View style={styles.money}>
        <Text style={styles.label}> R$</Text>
        <View style={styles.info}>
          <Text style={styles.infoText}>250,00</Text>
        </View>
      </View>
		</View>
	);
};
