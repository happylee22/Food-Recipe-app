import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import CustomButtons from "../buttons/buttons";
import { styles } from "./styles";

const Splash = () => {
  const router = useRouter();
  const onPress = () => {
    router.push("/homeScreen");
  };
  return (
    <View style={styles.background}>
      <Image
        source={require("@/assets/images/background.png")}
        style={styles.back}
      />
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
        <Text style={styles.biggTitle}> Cooking</Text>

        <Text style={styles.subTitle}>Simple way to find tasty Recipe</Text>

        <CustomButtons onPress={onPress}>Start Cooking</CustomButtons>
      </View>
    </View>
  );
};

export default Splash;
