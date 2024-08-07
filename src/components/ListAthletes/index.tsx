import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Group, useAuth, User } from "../../hooks/auth";

import { Athletes } from "../Athletes";

import { styles } from "./styles";

type Props = {
	data: Group;
  perfil: boolean;
  account: boolean
};

export const ListAthletes = ({data, perfil, account}: Props) => {

  const { loadAthletes } = useAuth();

  const [athletes, setAthletes ] = useState<User[]>();

  async function recebe(){
    setAthletes(await loadAthletes(data.athletes));
  }

  useEffect(() => {
    recebe();
  }, []);

	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			style={styles.container}
			data={athletes}
			keyExtractor={item => item.id}
			renderItem={({item}) => (
				<Athletes data={item} perfil={perfil} setAthletes={setAthletes} account={account}/>
			)}
		/>
	);
};
