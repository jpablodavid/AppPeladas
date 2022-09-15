import React from "react";
import { View, TouchableOpacity, TouchableOpacityProps, Image} from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {};

export const CustomTabBarButton = ({...rest }: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
        }}
      >
        <Image
            source={require('../../assets/play.png')}
            resizeMode="contain"
            style={{
              width: 130,
              height: 130,
            }}
          />
      </View>
    </TouchableOpacity>
  )
};
