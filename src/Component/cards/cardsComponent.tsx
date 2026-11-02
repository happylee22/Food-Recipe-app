import { Image, StyleProp, Text, View, ViewStyle } from "react-native";
import { styles } from "./cardStyle";
type RecipeCardProps = {
  title: string;
  image?: string;
  timer: number;
  style?: StyleProp<ViewStyle>;
  author: { name: string; image?: string | null };
};

const Cards = ({ title, image, author, timer, style }: RecipeCardProps) => {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.image} source={{ uri: image }} />

      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.label}>Time</Text>
      <Text style={styles.value}>{timer}</Text>
    </View>
  );
};

export default Cards;
