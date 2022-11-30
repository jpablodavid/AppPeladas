import React from "react";
import { View, Text } from "react-native";

import { User } from "firebase/auth";

import { styles } from "./styles";

type Props = {
	data: Array<string>;
};

const months = [
  "janeiro",
  "feverreiro",
  "março",
  "april",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

export const Payment = ({data}: Props) => {

	return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>2022</Text>
      </View>
      <View style={styles.months}>
          {
            months.map((value, index) => (
              <View style={[styles.containerItemMonth, {backgroundColor: data.includes(value) ?  "green" : "red" }]}>
                <Text style={styles.itemMonth} key={index}>{value}</Text>
              </View>
            ))
          }
      </View>
      <View style={styles.legendContainer}>
          <View style={styles.legend}>
            <View style={[styles.boxColor, {backgroundColor: "green"}]}></View>
            <Text style={styles.text}>Pagamento Efetuado</Text>
          </View>
          <View style={styles.legend}>
            <View style={[styles.boxColor, {backgroundColor: "red"}]}></View>
            <Text style={styles.text}>Sem Pagamento</Text>
          </View>
      </View>
    </View>
	);
};
