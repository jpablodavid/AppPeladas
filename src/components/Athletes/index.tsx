import React, { useState }  from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { useAuth, User } from "../../hooks/auth";
import { ModalPerfil } from "../ModalPerfil";

import { styles } from "./styles";

type Props = RectButtonProps & {
	data: User;
  exclude: (idGroup: string, idathletes: string) => Promise<void>;
};

export const Athletes = ({ data, exclude }: Props) => {

  const { user } = useAuth();

  const [openModal, setOpenModal] = useState(false);


  function handleCloseModal() {
    setOpenModal(false);
  }

  function handlerOpenModal() {
    setOpenModal(true);
  }

	function handlerExcluir() {
    exclude("xFMvKV2P2P3kcrl8NFzC", data.id);
		alert("Excluir");
	}

	function handlerDetailsAthletes() {
		alert(data.adm);
	}

	return (
		<View style={styles.container}>
			<View style={styles.number}>
				<Text style={styles.textNumber}>{data.camisa}</Text>
			</View>
			<RectButton style={styles.name} onPress={handlerOpenModal}>
				<View style={{flex: 1, marginRight: 8}} >
					<Text style={styles.textName}>{data.name}</Text>
				</View>
			</RectButton>
      {user.adm && (
        <View style={styles.exclude}>
          <RectButton style={styles.excludesButton} onPress={handlerExcluir}>
            <Text style={styles.textButton}>X</Text>
          </RectButton>
        </View>
			)}
      <ModalPerfil
        data={data}
        visible={openModal}
        setOpenModal={handleCloseModal}
      />
		</View>
	);
};
