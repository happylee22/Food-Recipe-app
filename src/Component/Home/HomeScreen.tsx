import Input from "@/Component/Input/inputScreen";
import { colors } from "@/constants/colors";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import Categories from "../Categories/categories";
import Title from "../title/CustomTitle";
import { styles } from "./homeStyle";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Search Here"
        placeholderTextColor={colors.lightGray}
        editable={false}
        onPress={() => router.push("/search")}
      />
      <Title text="Featured Recipies" />
      <Categories
        categories={["All", "Trending", "Porpular"]}
        selectCategory="All"
        onCategoryPress={() => {}}
      />
    </View>
  );
};

export default HomeScreen;
