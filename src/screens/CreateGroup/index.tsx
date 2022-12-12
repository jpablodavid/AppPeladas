import React from "react";
import { View, Text, KeyboardAvoidingView, ScrollView, ActivityIndicator, Keyboard, TouchableOpacity, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Button } from "../../components/Button";
import { InputControl } from "../../components/InputControl";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Background } from "../../components/Background";
import { useAuth } from "../../hooks/auth";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type FormData = {
  name: string,
  date: string,
  day: string,
  time: string,
  location: string,
  mensal: number,
  convidado: number,
};

const schema = yup.object({
  name: yup.string().required("Informe o nome do Grupo"),
  date: yup.string()
})

export const CreateGroup = ({navigation}) => {

  const { primary10, primary100, secondary } = theme.colors;

  const { user, loading, createGroup } = useAuth();

  const {control, handleSubmit, formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  function handleCreateGroup(data: FormData) {
    createGroup(data.name, data.date, data.location, data.day, data.time,data.mensal, data.convidado, user.id)
    navigation.navigate('AccountGroup');
  }

  function handleGoback() {
    navigation.goBack();
  }

  return (
    <Background>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
            enabled>
            <View style={styles.imgGrupo}>
              <LinearGradient
                style={styles.imageContainer}
                colors={[primary100, secondary]}
              >
                <TouchableOpacity style={styles.image}>
                  <Text style={styles.textInner}>+</Text>
                </TouchableOpacity>
              </LinearGradient>

              <Text style={styles.textAdd}>Adicionar imagem</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Preencha as Informações para criar seu
                <Text style={styles.title}> Grupo de Peladas.</Text>
              </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
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
              <View style={styles.inputContainer}>
                <InputControl
                  name="time"
                  icon="heart"
                  placeholder={"Hora da Pelada"}
                  control={control}
                  error={errors.name}
                />
              </View>
              <View style={styles.inputContainer}>
                <InputControl
                  name="mensal"
                  icon="heart"
                  placeholder={"Mensalidade"}
                  control={control}
                  error={errors.name}
                />
              </View>
              <View style={styles.inputLastContainer}>
                <InputControl
                  name="convidado"
                  icon="heart"
                  placeholder={"Valor Convidado"}
                  control={control}
                  error={errors.name}
                />
              </View>
              <View style={{marginBottom: 16}}>
              {
                loading ?
                  (<ActivityIndicator size={36} color={primary10} />)
                  :
                  <Button text={"Criar Grupo"} onPress={handleSubmit(handleCreateGroup)}/>
              }
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
      <View style={{height: 80 }}/>
    </Background >
  );
};
