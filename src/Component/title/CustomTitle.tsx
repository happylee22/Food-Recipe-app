import { StyleProp, Text, TextStyle, View } from "react-native";
import { styles } from "./tytleStyle";
type Props = {
  text: string;
  style?: StyleProp<TextStyle>;
};
const Title = ({ text = "Title", style }: Props) => {
  return (
    <View>
      <Text style={[styles.title, style]}>{text}</Text>
    </View>
  );
};

export default Title;
