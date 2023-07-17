import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = {
	data: Array<String>;
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

  const { paid, notPaid } = theme.colors;

	return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>2023</Text>
      </View>
      <View style={styles.months}>
          {
            months.map((value, index) => (
              <View key={index} style={[styles.containerItemMonth, {backgroundColor: data.includes(value) ?  paid : notPaid }]}>
                <Text style={styles.itemMonth} key={index}>{value}</Text>
              </View>
            ))
          }
      </View>
      <View style={styles.legendContainer}>
          <View style={styles.legend}>
            <View style={[styles.boxColor, {backgroundColor: paid}]}></View>
            <Text style={styles.text}>Pagamento Efetuado</Text>
          </View>
          <View style={styles.legend}>
            <View style={[styles.boxColor, {backgroundColor: notPaid}]}></View>
            <Text style={styles.text}>Sem Pagamento</Text>
          </View>
      </View>
    </View>
	);
};
