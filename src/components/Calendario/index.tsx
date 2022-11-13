import React, { useState } from "react";
import { View, Text ,FlatList, TouchableOpacity, Dimensions } from "react-native";
import { useAuth } from "../../hooks/auth";
import { AntDesign } from '@expo/vector-icons';

import { styles } from "./styles";
import Carousel from "react-native-reanimated-carousel";

const width = Dimensions.get('window').width;

export const Calendario = ({data}) => {

  const { group, user } = useAuth();

	const [openModal, setOpenModal] = useState(false);

  function handleOpenModal(){
		setOpenModal(true);
	}

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
            width={357}
            height={width/1.4}
            autoPlay={false}
            data={month}
            scrollAnimationDuration={1000}
            renderItem={({ item, index }) => (
              <View style={styles.calendar}>
                <View style={styles.header}>
                  { index > 0 ?
                      <TouchableOpacity>
                        <AntDesign name="caretleft" size={24} color="black" />
                      </TouchableOpacity>
                    :
                      <View></View>
                  }
                  <Text style={styles.title}>{item} / 2022</Text>
                  { index < 11 ?
                      <TouchableOpacity>
                        <AntDesign name="caretright" size={24} color="black" />
                      </TouchableOpacity>
                    :
                      <View></View>
                  }
                </View>

                <View style={styles.content}>
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
                        <View style={styles.containerWeekDay}>
                          <Text style={styles.dayItem} key={index}>{value}</Text>
                        </View>
                      ))
                    }
                  </View>
                </View>

              </View>
            )}
        />
        <View style={styles.info}>
          <Text style={styles.textInfo}>
            teste essa festa de aniversario do mês
          </Text>
        </View>
		</View>
	);
};
