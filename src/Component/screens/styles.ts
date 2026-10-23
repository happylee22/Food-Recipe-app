import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 40,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 14,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
  },
  bigTitle: {
    color: colors.white,
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
  subTitle: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 64,
    marginTop: 20,
  },
});
