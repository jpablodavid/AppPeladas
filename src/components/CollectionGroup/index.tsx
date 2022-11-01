import React, { useState } from "react";
import Carousel from 'react-native-reanimated-carousel';
import { View, Text, Dimensions } from "react-native";
import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";
import { Months } from "../../utils/collectionMonths";

const width = Dimensions.get('window').width;

type Props = {
  data: typeof Months;
};

export const CollectionGroup = ({data}: Props) => {

  const { group } = useAuth();

	return (
		<View style={styles.container}>
        <Carousel
          loop={false}
          width={width}
          height={width / 2.3 }
          autoPlay={false}
          data={Months}
          scrollAnimationDuration={1000}
          renderItem={({ item }) => (
            <View style={styles.carrossel}>
              <Text style={styles.title}>{item.mes}</Text>
              <View style={styles.containerItem}>
                <View style={styles.test}>
                  <Text style={styles.title}>Arrecadações</Text>
                  <Text style={styles.title}>Custos</Text>
                </View>
                <View style={styles.test}>
                  <Text style={styles.textArrecadacao}>R$ {item.arrecadações}</Text>
                  <Text style={styles.textCustos}>R$ {item.custos}</Text>
                </View>
              </View>
              </View>
          )}
        />
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
