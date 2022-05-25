import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Group, useAuth, User } from "../../hooks/auth";
import { Athletes } from "../Athletes";

import { styles } from "./styles";

type Props = {
	data: Group;
};

export const ListAthletes = ({data}) => {

  const { loadAthletes, excludeAthletes } = useAuth();

  const [athletes, setAthletes ] = useState<User[]>();

  async function recebe(){
    setAthletes(await loadAthletes(data.athletes));
  }

  async function excluir(idGroup: string, idAthletes: string){
    await excludeAthletes(idGroup , idAthletes);
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
				<Athletes data={item} exclude={excluir}/>
			)}
		/>
	);
};
