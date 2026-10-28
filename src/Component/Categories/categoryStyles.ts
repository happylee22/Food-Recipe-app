import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    fontSize: 12,
    color: colors.green,
    fontWeight: "bold",
    padding: 10,
    paddingHorizontal: 12,
  },
  selectedItem: {
    color: colors.white,
  },
  itemContainer: {
    marginBottom: 14,
    marginRight: 8,
  },
  selectedItemContainer: {
    backgroundColor: colors.green,
    borderRadius: 10,
  },
});
