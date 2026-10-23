import Splash from "@/Component/screens/Splash";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
const Index = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Splash />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
