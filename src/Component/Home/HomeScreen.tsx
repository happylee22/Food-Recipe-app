import Input from "@/Component/Input/inputScreen";
import { colors } from "@/constants/colors";
import { router } from "expo-router";
import { FlatList, View } from "react-native";
import Categories from "../Categories/categories";
import RecipeCard from "../RecipeCard/recipeCard";
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
      <FlatList
        style={{
          flexGrow: 0,
          marginHorizontal: -24,
        }}
        horizontal
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={({ index }) => (
          <RecipeCard
            style={index === 0 ? { marginLeft: 24 } : {}}
            title="Steak with tomato sauce and bulgur rice"
            author={{
              name: "James Milner",
              image:
                "https://assets.survivalinternational.org/pictures/489/width460-c5faa843e9b4fbcd5bfdaabdb222729b.jpg",
            }}
            timer="20 mins"
          />
        )}
      />

      <Categories
        categories={["All", "Trending", "Porpular"]}
        selectCategory="All"
        onCategoryPress={() => {}}
      />
    </View>
  );
};

export default HomeScreen;
