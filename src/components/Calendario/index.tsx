import React, { useState } from "react";
import { View, Text, Dimensions, Modal } from "react-native";
import { useAuth } from "../../hooks/auth";
import moment from "moment";

import Carousel from "react-native-reanimated-carousel";
import { ButtonText } from "../ButtonText";
import { InputArea } from "../InputArea";
import { Button } from "../Button";
import { MonthCard } from "../MonthCard";

import { styles } from "./styles";

const width = Dimensions.get('window').width;


export const Calendario = ({data}) => {

  const { group, user } = useAuth();

	const [openModal, setOpenModal] = useState(false);

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handlerOpenModal() {
    setOpenModal(true);
  }

  function agendar() {
    setOpenModal(false);
  }

  // trabalhan com as datas
  const [currentYear, setCurrentYear] = useState(2022);
  const [dateSelected, setDateSelected] = useState([]);

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  moment.updateLocale("pt", {
    months: [
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
    ],
  });

  const [date, setDate] = useState(new Date());

  const [event, setEvent] = useState('');

  const week = [
    'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'
  ];

  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

	return (
		<View style={styles.container}>
        <Carousel
          loop={false}
          width={width}
          height={width/1.5}
          autoPlay={false}
          data={month}
          scrollAnimationDuration={500}
          renderItem={({ item, index }) => (
            <MonthCard
              key={index}
              index={index}
              month={item}
              currentYear={currentYear}
              event={new Date()}
            />
          )}
        />
        <View style={styles.info}>
          <Text style={styles.textInfo}>
            teste essa festa de aniversario do mês
          </Text>
        </View>
        <Modal
        transparent
        animationType="slide"
        statusBarTranslucent
        visible={openModal}>
        <View style={styles.modal}>
          <ButtonText style={{ width: 60 }} onPress={handleCloseModal}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', margin: 8}}>X</Text>
          </ButtonText>
          <View style={styles.input}>
            <InputArea
              placeholderTextColor={"#555"}
              placeholder={"descreva o evento nesta data"}
              value={event} size={""}            />
            <View style={{width: "60%"}}>
              <Button color={"red"} text={"Agendar"} onPress={agendar} />
            </View>
          </View>
        </View>
      </Modal>
		</View>
	);
};
