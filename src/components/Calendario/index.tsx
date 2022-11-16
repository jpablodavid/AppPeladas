import React, { useState } from "react";
import { View, Text ,TouchableOpacity, Dimensions, Modal } from "react-native";
import { useAuth } from "../../hooks/auth";
import { AntDesign } from '@expo/vector-icons';

import Carousel from "react-native-reanimated-carousel";
import { ButtonText } from "../ButtonText";
import { InputArea } from "../InputArea";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { Button } from "../Button";

const width = Dimensions.get('window').width;

export const Calendario = ({data}) => {

  const { group, user } = useAuth();

	const [openModal, setOpenModal] = useState(false);

  const [date, setDate] = useState();

  const [event, setEvent] = useState('');

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handlerOpenModal() {
    setOpenModal(true);
  }

  function agendar() {
    setOpenModal(false);
  }

  /* function handleDateChange(value: string) {
    setDate(value);
  } */

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

  const week = [
    'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'
  ]

  const day = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14','15', '16', '17', '18', '19', '20', '21', '22', '23', '24','25', '26', '27', '28', '29', '30', '31'
  ]

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
              <View style={styles.calendar}>
                <View style={styles.header}>
                  { index > 0 ?
                      <TouchableOpacity>
                        <AntDesign name="caretleft" size={20} color="black" />
                      </TouchableOpacity>
                    :
                      <View></View>
                  }
                  <Text style={styles.title}>{item} / 2022</Text>
                  { index < 11 ?
                      <TouchableOpacity>
                        <AntDesign name="caretright" size={20} color="black" />
                      </TouchableOpacity>
                    :
                      <View></View>
                  }
                </View>
                <View style={styles.weeks}>
                  {
                    week.map((value, index) => (
                      <View style={styles.containerWeekItem}>
                        <Text style={styles.weekItem} key={index}>{value}</Text>
                      </View>
                    ))
                  }
                </View>
                <View style={styles.days}>
                  {
                    day.map((value, index) => (
                      <TouchableOpacity style={[styles.containerWeekDay, { backgroundColor: event ? theme.colors.tabColor : "#fff"}]} onPress={handlerOpenModal}>
                        <Text style={styles.dayItem} key={index}>{value}</Text>
                      </TouchableOpacity>
                    ))
                  }
                </View>
              </View>
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
              value={event}
            />
            <View style={{width: "60%"}}>
              <Button color={"red"} text={"Agendar"} onPress={agendar} />
            </View>
          </View>
        </View>
      </Modal>
		</View>
	);
};
