import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    width: "80%",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
  icons: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
});
