import React, { ReactNode } from "react";
import { Picker, PickerItemProps, PickerProps} from '@react-native-picker/picker';
import { View } from "react-native";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = PickerItemProps & PickerProps &{
  icon: ReactNode;
  itens: string[];
  placeholder: string;
};

export const InputSelect = ({ icon, placeholder ,itens, ...rest }: Props) => {
  return (
    <View style={styles.container}>
      <View>{icon}</View>
      <Picker
        style={styles.input}
        mode='dropdown'
        dropdownIconColor={theme.colors.primary100}
        {...rest}
      >
        <Picker.Item style={styles.placeholder} label={placeholder} value="Unknown"/>
        {
          itens.map((item) => {
            return <Picker.Item style={styles.item} label={item} value={item} />
          })
        }
      </Picker>
    </View>
  );
};
