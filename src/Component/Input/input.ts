import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lightGray,
    paddingHorizontal: 10,
  },
  input: {
    color: colors.black,
    fontSize: 14,
    fontWeight: "500",
    flex: 1,
  },
  icons: {
    marginRight: 16,
  },
});
