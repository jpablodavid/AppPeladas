import React, { useEffect, useState } from "react";
import Carousel from 'react-native-reanimated-carousel';
import { View, Text, Dimensions } from "react-native";
import { Account, ItemAccount, useAuth } from "../../hooks/auth";

import { styles } from "./styles";

const width = Dimensions.get('window').width;

const Months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export const CollectionGroup = () => {

  const { accounting } = useAuth();

  const currentDate = new Date().getMonth();

  const [loading, setLoading] = useState(false);

  const [month, setMonth] = useState([{mes: currentDate, arrecadacoes: 0 , custos: 0}]);

  const [arrecadacoes, setArrecadacoes] = useState(0);

  const [custos, setCustos] = useState(0);

  function totalMeses(data: Account, meses: Array<string>){
    const arrecadacoesMensais = [];
    const custosMensais = [];
    const valoresMensais = [];

    let totalArrecadacoes = 0;
    let totalCustos = 0;
    let total = 0;
    let index = 0;

    const date = (item: number) => new Date(item);

    for(let mesControle = 0; mesControle < 12; mesControle++) {
      let jump = true;
      while(date(data.arrecadacoes[index]?.date['seconds'] * 1000).getMonth() === mesControle) {
        total += data.arrecadacoes[index].valor;
        index ++;
        jump = false;
      }
      if(!jump){
        arrecadacoesMensais.push(total);
      }else{
        total = 0
        arrecadacoesMensais.push(total);
      }
    }

    setArrecadacoes(totalArrecadacoes);

    index = 0;
    total = 0;
    for(let mesControle = 0; mesControle < 12; mesControle++) {
      let jump = true;
      while(date(data.custos[index]?.date['seconds'] * 1000).getMonth() === mesControle){
        total += data.custos[index].valor;
        index ++;
        jump = false;
      }
      if(!jump){
        custosMensais.push(total);
      }else{
        total = 0
        custosMensais.push(total);
      }
    }

    meses.forEach((item, index) => {
      if (index <= currentDate){
        totalCustos += custosMensais[index];
        totalArrecadacoes += arrecadacoesMensais[index];
        valoresMensais.push({mes: item, arrecadacoes: arrecadacoesMensais[index], custos: custosMensais[index]})
      }
    })

    setMonth(valoresMensais);
    setCustos(totalCustos);
    setArrecadacoes(totalArrecadacoes);
  }

  useEffect(() => {
    totalMeses(accounting, Months);
  }, []);

	return (
		<View style={styles.container}>
      <Carousel
        loop={false}
        width={width}
        height={width / 2.3 }
        autoPlay={false}
        data={month}
        scrollAnimationDuration={1000}
        renderItem={({ item , index }) => (
          <View style={styles.carrossel} key={index}>
            <Text style={styles.title}>{item.mes}</Text>
            <View style={styles.containerItem}>
              <View style={styles.content}>
                <Text style={styles.title}>Arrecadações</Text>
                <Text style={styles.title}>Custos</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.textArrecadacao}>R$ {item.arrecadacoes}</Text>
                <Text style={styles.textCustos}>R$ {item.custos}</Text>
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
            <Text style={styles.infoText}>{arrecadacoes.toFixed(2)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.demo}>
        <Text style={styles.label}>Custos:             </Text>
        <View style={styles.money}>
          <Text style={styles.label}>R$</Text>
          <View style={styles.info}>
            <Text style={styles.infoText}>{custos.toFixed(2)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.demo}>
        <Text style={styles.label}>Rendimentos:</Text>
        <View style={styles.money}>
          <Text style={styles.label}>R$</Text>
          <View style={styles.info}>
            <Text style={styles.infoText}>{(arrecadacoes - custos).toFixed(2)}</Text>
          </View>
        </View>
      </View>
		</View>
	);
};
