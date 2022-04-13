import React from "react";
import { View, Text, KeyboardAvoidingView, ScrollView, ActivityIndicator, Keyboard } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";

import { Button } from "../../components/Button";
import { InputControl } from "../../components/InputControl";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { ButtonText } from "../../components/ButtonText";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { Background } from "../../components/Background";
import { useAuth } from "../../hooks/auth";
import { ButtonDisable } from "../../components/ButtonDisable";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { primary100, secondary } = theme.colors;

type FormData = {
  name: string,
  date: string,
  day: string,
  time: string,
  location: string,
};

const schema = yup.object({
  name: yup.string().required("Informe o nome do Grupo"),
  date: yup.string()
})

export const CreateGroup = ({navigation}) => {

  const { loading, createGroup } = useAuth();

  const {control, handleSubmit, formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  function handleCreateGroup(data: FormData) {
    createGroup(data.name, data.date, data.location, data.day, data.time)
    navigation.navigate('AcessGroup');
  }

  function handleGoback() {
    navigation.goBack();
  }

  return (
    <Background>
      <ButtonText style={styles.goBack} onPress={handleGoback}>
        <Entypo name="chevron-left" size={24} color="black" />
      </ButtonText>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView enabled>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.imgGrupo}>
                <LinearGradient
                  style={styles.imageContainer}
                  colors={[primary100, secondary]}
                >
                  <View style={styles.image}>
                    <Text style={styles.textInner}>+</Text>
                  </View>
                </LinearGradient>

                <Text style={styles.textAdd}>Adicionar imagem</Text>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Preencha as Informações para criar seu
                  <Text style={styles.title}> Grupo de Peladas.</Text>
                </Text>
              </View>

              <View style={styles.inputContainer}>
                <InputControl
                  name='name'
                  icon="user"
                  placeholder={"Nome do Grupo"}
                  control={control}
                  error={errors.name}
                />
              </View>

              <View style={styles.inputContainer}>
                <InputControl
                  name='date'
                  icon="calendar"
                  placeholder={"Data de Criação "}
                  control={control}
                  error={errors.name}
                />
              </View>

              <View style={styles.inputContainer}>
                <InputControl
                  name='location'
                  icon="heart"
                  placeholder={"Local do Campo"}
                  control={control}
                  error={errors.name}
                />
              </View>

              <View style={styles.inputContainer}>
                <InputControl
                  name='day'
                  icon="heart"
                  placeholder={"Dia Pelada"}
                  control={control}
                  error={errors.name}
                />
              </View>
              <View style={styles.inputLastContainer}>
                <InputControl
                  name="time"
                  icon="heart"
                  placeholder={"Hora da Pelada"}
                  control={control}
                  error={errors.name}
                />
              </View>
              <View style={{ marginBottom: 16 }}>
                {
                  loading ?
                    (<ActivityIndicator size={36} color={theme.colors.primary10} />)
                    :
                    <Button text={"Criar Grupo"} /* onPress={handleSubmit(handleCreateGroup)} */ onPress={navigation.navigate('AcessGroup')} />
                }
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    </Background >
  );
};
