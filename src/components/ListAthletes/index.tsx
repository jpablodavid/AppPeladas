import React from "react";
import { FlatList } from "react-native";
import { Group } from "../../hooks/auth";
import { Athletes } from "../Athletes";

import { styles } from "./styles";

type Props = {
	data: Group;
};

export const ListAthletes = ({data}) => {

  const menbers = data.athletes;

	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			style={styles.container}
			data={menbers}
			keyExtractor={item => item.id}
			renderItem={({item}) => (
				<Athletes data={item}/>
			)}
		/>
	);
};
