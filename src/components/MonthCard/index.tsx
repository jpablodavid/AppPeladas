import React, { useEffect, useState } from "react";
import moment from "moment";
import { View, Text ,TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
	month: string | number;
  index: number;
  currentYear: number;
  event: Date;
};

export const MonthCard = ({month, index, currentYear, event}: Props) => {

  const { line, black, white, tabColor } = theme.colors;

  const [value, setValue] = useState(
    moment().locale("pt").month(month).year(currentYear)
  );

  const [calendar, setCalendar] = useState([]);

  // data de um evente toDo
  const [eventDay, setEventDay ] = useState(event.getDay());

  const weekDays = [
    'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'
  ];

   // primeiro dia no calendario mensal
  const startDay = value.clone().startOf("month").startOf('week');
   // ultimo dia no calendario mensal
  const endDay = value.clone().endOf("month").endOf('week');

  // primeiro dia do mes
  const firstday = value.clone().startOf('month');

  // ultimo dia do mes
  const lastDay = value.clone().endOf('month');

   // dia controle
  const day = startDay.clone().subtract(1, 'day');

  while(day.isBefore(endDay, 'day')){
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone())
    )
  }

  useEffect(() => {

  }, [value]);

  return (
    <View style={styles.calendar}>
      <View style={styles.header}>
        { index > 0 ?
            <TouchableOpacity>
              <AntDesign name="caretleft" size={20} color="black" />
            </TouchableOpacity>
          :
            <View></View>
        }
        <Text style={styles.title}>{value.format('MMMM')}/{currentYear}</Text>
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
          weekDays.map((value, index) => (
            <View style={styles.containerWeekItem}>
              <Text style={styles.weekItem} key={index}>{value}</Text>
            </View>
          ))
        }
      </View>
      <View style={styles.days}>
        {
          calendar.map((week) => (
            week.map((day: any) => (
            <TouchableOpacity style={[styles.containerWeekDay, { backgroundColor: eventDay === day ? tabColor : white}]}>
              <Text style={[styles.dayItem, {color: day < firstday || day > lastDay ? line : black} ]} key={day._d.getTime() + day.month}>{day.format('DD')}</Text>
            </TouchableOpacity>
            ))
          ))
        }
      </View>
    </View>
  );
}
