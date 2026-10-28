import { colors } from "@/constants/colors";
import Feather from "@expo/vector-icons/Feather";
import { Pressable, TextInput, TextInputProps } from "react-native";
import { styles } from "./input";
type InputProps = TextInputProps & {
  onPress?: () => void;
};
export default function Input({
  onPress,
  editable = true,
  ...props
}: InputProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Feather
        name="search"
        size={20}
        color={colors.lightGray}
        style={styles.icons}
      />
      <TextInput {...props} editable={editable} style={styles.input} />
    </Pressable>
  );
}
