import Ratings from "@/Component/Ratings/ratingsStar";
import { Image, StyleProp, Text, View, ViewStyle } from "react-native";
import { styles } from "./recipecardStyle";
type RecipeCardProps = {
  title: string;
  image: string;
  author: { name: string; image?: string | null };
  rating: number;
  timer: number;
  style: StyleProp<ViewStyle>;
};

const RecipeCard = ({
  title,
  image,
  author,
  rating,
  timer,
  style,
}: RecipeCardProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Ratings rating={rating} />
        </View>

        <Image style={styles.image} source={{ uri: image }} />
      </View>

      {/* sub parent */}
      <View style={styles.footer}>
        {/* first */}
        <View style={styles.row}>
          {author.image ? (
            <Image style={styles.authorImage} source={{ uri: author.image }} />
          ) : null}
          <Text style={styles.footerText}>{`By ${author.name}`}</Text>
        </View>
        {/* second */}

        <View style={styles.row}>
          <Image
            style={styles.timericon}
            source={require("@/assets/images/timer.png")}
          />
          <Text style={styles.footerText}>{timer}</Text>
        </View>
      </View>
    </View>
  );
};

export default RecipeCard;
