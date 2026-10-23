import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type CustomButtonsProps = {
  children: ReactNode;
};
const CustomButtons = ({ children }: CustomButtonsProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      <FontAwesome
        name="long-arrow-right"
        size={24}
        color="white"
        style={styles.icons}
      />
    </TouchableOpacity>
  );
};

export default CustomButtons;
