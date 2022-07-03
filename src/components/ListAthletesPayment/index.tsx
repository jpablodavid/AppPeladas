import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Group, useAuth, User } from "../../hooks/auth";
import { AthletesPayment } from "../AthletesPayment";

import { styles } from "./styles";

type Props = {
	data: Group;
};

export const ListAthletesPayment = ({data}: Props) => {

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
				<AthletesPayment data={item}/>
			)}
		/>
	);
};
