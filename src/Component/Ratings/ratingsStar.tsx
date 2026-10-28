import { Image, View } from "react-native";
import { styles } from "./ratings";
type Props = {
  rating: number;
};
const Ratings = ({ rating }: Props) => {
  // The array
  const arrOfStars = [1, 2, 3, 4, 5];
  //The function
  const renderStars = () => {
    return arrOfStars.map((star, index) => {
      if (Math.round(rating) > star) {
        return (
          <Image
            key={index}
            style={styles.star}
            source={require("@/assets/images/star.png")}
          />
        );
      }
      return (
        <Image
          key={index}
          style={styles.star}
          source={require("@/assets/images/halfStar.png")}
        />
      );
    });
  };
  return <View style={styles.row}>{renderStars()}</View>;
};

export default Ratings;
