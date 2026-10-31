import { Image, StyleProp, Text, View, ViewStyle } from "react-native";
import { styles } from "./cardStyle";
type RecipeCardProps = {
  title: string;
  image?: string;
  timer: string;
  style: StyleProp<ViewStyle>;
};

const Cards = ({
  title,
  image,

  timer,
  style,
}: RecipeCardProps) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.image}
        source={require("@/assets/images/food.png")}
      />

      <Text numberOfLines={3} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.label}>Time</Text>
      <Text style={styles.value}>{timer}</Text>
    </View>
  );
};

export default Cards;
