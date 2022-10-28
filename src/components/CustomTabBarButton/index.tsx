import React from "react";
import { View, TouchableOpacity, TouchableOpacityProps, Image} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from "./styles";

type Props = TouchableOpacityProps & {};

export const CustomTabBarButton = ({...rest }: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
    <View style={{alignItems: "center"}}>
            <MaterialCommunityIcons name="plus-circle-outline" size={60} color='white'/>
          </View>
    </TouchableOpacity>
  )
};

