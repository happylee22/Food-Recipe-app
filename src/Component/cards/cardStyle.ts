import { colors } from "@/constants/colors";
import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(217,217,217,0.5)",
    borderRadius: 12,
    // height: height * 0.14,
    padding: 10,
    width: width * 0.4,
    marginVertical: 32,
    marginRight: 16,
    marginTop: 60,
  },
  title: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },

  label: {
    color: colors.lightGray2,
    fontSize: 11,
    marginTop: 8,
    marginBottom: 4,
  },
  value: {
    color: colors.gray,
    fontSize: 11,
    fontWeight: "bold",
  },

  image: {
    width: 100,
    height: 100,
    marginTop: -60,
    borderRadius: 50,
    alignSelf: "center",
  },
});
