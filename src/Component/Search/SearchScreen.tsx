import { colors } from "@/constants/colors";
import React from "react";
import { View } from "react-native";
import Input from "../Input/inputScreen";
import { styles } from "./searchStyle";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Search Here"
        placeholderTextColor={colors.lightGray}
      />
    </View>
  );
};

export default SearchScreen;
