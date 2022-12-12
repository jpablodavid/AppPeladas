import React, { useEffect } from "react";
import Carousel from 'react-native-reanimated-carousel';
import { View, Text, Dimensions, ScrollView } from "react-native";

import { styles } from "./styles";
import { Months } from "../../utils/collectionMonths";
import { useAuth } from "../../hooks/auth";

const width = Dimensions.get('window').width;


type Props = {
  data: typeof Months;
};

function totalArrecadacoes(list: typeof Months){
  let total = 0
  list.forEach((item) => total = total + parseFloat(item.arrecadações))
  return total;
}

function totalCustos(list: typeof Months){
  let total = 0
  list.forEach((item) => total = total + parseFloat(item.custos))
  return total;
}


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
                <View style={styles.content}>
                  <Text style={styles.title}>Arrecadações</Text>
                  <Text style={styles.title}>Custos</Text>
                </View>
                <View style={styles.content}>
                  <Text style={styles.textArrecadacao}>R$ {parseFloat(item.arrecadações).toFixed(2)}</Text>
                  <Text style={styles.textCustos}>R$ {parseFloat(item.custos).toFixed(2)}</Text>
                </View>
              </View>
              </View>
          )}
        />
        <Text style={styles.title}>Anual</Text>
        <View style={styles.demo}>
          <Text style={styles.label}>Arrecadações:</Text>
          <View style={styles.money}>
            <Text style={styles.label}>R$</Text>
            <View style={styles.info}>
              <Text style={styles.infoText}>{totalArrecadacoes(Months).toFixed(2)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.demo}>
          <Text style={styles.label}>Custos:</Text>
          <View style={styles.money}>
            <Text style={styles.label}>R$</Text>
            <View style={styles.info}>
              <Text style={styles.infoText}>{totalCustos(Months).toFixed(2)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.demo}>
          <Text style={styles.label}>Rendimentos:</Text>
          <View style={styles.money}>
            <Text style={styles.label}>R$</Text>
            <View style={styles.info}>
              <Text style={styles.infoText}>{(totalArrecadacoes(Months) - totalCustos(Months)).toFixed(2)}</Text>
            </View>
          </View>
        </View>
		</View>
	);
};
