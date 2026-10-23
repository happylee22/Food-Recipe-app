import { Image, ImageBackground, Text, View } from "react-native";
import CustomButtons from "../buttons/buttons";
import { styles } from "./styles";

const Splash = () => {
  return (
    <ImageBackground
      source={require("@/assets/images/background.png")}
      style={styles.background}
    >
      {/* first Child View */}
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/chef.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>100K+ Premium Recipe</Text>
      </View>
      {/* second View */}
      <View style={styles.container}>
        <Text style={styles.bigTitle}>Get</Text>
        <Text style={styles.bigTitle}> Cooking</Text>

        <Text style={styles.subTitle}>Simple way to find tasty Recipe</Text>

        <CustomButtons>Start Cooking</CustomButtons>
      </View>
    </ImageBackground>
  );
};

export default Splash;
