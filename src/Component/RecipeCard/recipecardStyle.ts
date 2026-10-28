import { colors } from "@/constants/colors";
import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    // height: height * 0.14,
    padding: 10,
    width: width * 0.7,
    marginVertical: 16,
    marginHorizontal: 5,
    marginTop: 46,
    marginRight: 16,
    //ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  title: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: "bold",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {
    color: colors.lightGray2,
    fontSize: 11,
  },
  authorImage: {
    width: 25,
    height: 25,
    marginRight: 8,
    borderRadius: 20,
  },
  timericon: {
    width: 17,
    height: 17,
    marginRight: 8,
  },
  image: {
    width: 80,
    height: 80,
    marginTop: -40,
    borderRadius: 50,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
});
