import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./homeStyle";

const HomeScreen = () => {
  const router = useRouter();
  const Onpress = () => {
    router.push("/search");
  };
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Text onPress={Onpress}>Go To Search</Text>
    </View>
  );
};

export default HomeScreen;
