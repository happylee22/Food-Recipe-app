import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { styles } from "./cardStyle";
type RecipeCardProps = {
  title: string;
  image?: string;
  timer: number;
  style?: StyleProp<ViewStyle>;
  author: { name: string; image?: string | null };
  onPress: () => void;
};

const Cards = ({ title, image, onPress, timer, style }: RecipeCardProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image style={styles.image} source={{ uri: image }} />

      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.label}>Time</Text>
      <Text style={styles.value}>{timer}</Text>
    </TouchableOpacity>
  );
};

export default Cards;
