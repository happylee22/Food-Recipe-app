import Input from "@/Component/Input/inputScreen";
import { colors } from "@/constants/colors";
import { useHealthyRecipes } from "@/Hooks/healthyRecipiesContext";
import { useRecipes } from "@/Hooks/recipeContext";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import Cards from "../cards/cardsComponent";
import Categories from "../Categories/categories";
import RecipeCard from "../RecipeCard/recipeCard";
import Title from "../title/CustomTitle";
import { styles } from "./homeStyle";

import {
  CardsSkeleton,
  CategoriesSkeleton,
  FadeIn,
  HealthyRecipesSkeleton,
} from "../moti/skeleton";

const HomeScreen = () => {
  const { recipes, isLoading } = useRecipes();
  const { healthyRecipes, isLoading: healthyLoading } = useHealthyRecipes();
  console.log("healthyRecipes=>", healthyRecipes);

  console.log("Recipies=>", recipes);
  const [tags, setTags] = useState<string[]>([]);
  const [selectTags, setSelectedTag] = useState<string>("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  useEffect(() => {
    const tagsList: string[] = [];
    recipes?.forEach((recipe) => {
      recipe?.tags?.forEach((tag) => {
        if (!tagsList.includes(tag?.name)) {
          tagsList?.push(tag?.name);
        }
      });
    });
    setTags(tagsList);
  }, [recipes]);
  //selectedTag
  useEffect(() => {
    if (selectTags) {
      console.log("selectedTag", selectTags);

      const filteredItem = recipes?.filter((rec) => {
        const tag = rec?.tags?.find((t) => t?.name === selectTags);
        return !!tag;
      });
      setFilteredRecipes(filteredItem);
    } else {
      setFilteredRecipes(recipes);
    }
  }, [selectTags, recipes]);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Search Here"
        placeholderTextColor={colors.lightGray}
        editable={false}
        onPress={() => router.push("/search")}
      />

      <Title text="Healthy Recipies" />
      {/* first FlatList */}
      {healthyLoading ? (
        <HealthyRecipesSkeleton />
      ) : (
        <FadeIn>
          <FlatList
            style={{
              flexGrow: 0,
              marginHorizontal: -24,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={healthyRecipes}
            keyExtractor={(item) => String(item?.id)}
            renderItem={({ item, index }) => (
              <RecipeCard
                onPress={() =>
                  router.push({
                    pathname: "/detailsScreen",
                    params: { id: String(item.id) },
                  })
                }
                style={index === 0 ? { marginLeft: 24 } : {}}
                image={item?.thumbnail_url}
                rating={(item.user_ratings?.score ?? 0) * 5}
                title={item?.name}
                author={{
                  name: item.credits?.[0]?.name ?? "Unknown",
                  image: item.credits?.[0]?.picture_url || item.thumbnail_url,
                }}
                timer={item?.cook_time_minutes || 10}
              />
            )}
          />
        </FadeIn>
      )}

      {isLoading ? (
        <CategoriesSkeleton />
      ) : (
        <Categories
          categories={tags}
          selectCategory={selectTags}
          onCategoryPress={setSelectedTag}
        />
      )}

      {/* Second FlatList */}
      {isLoading ? (
        <CardsSkeleton />
      ) : (
        <FadeIn>
          <FlatList
            style={{
              flexGrow: 0,
              marginHorizontal: -24,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filteredRecipes}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item, index }) => (
              <Cards
                style={index === 0 ? { marginLeft: 24 } : {}}
                onPress={() =>
                  router.push({
                    pathname: "/detailsScreen",
                    params: { id: String(item.id) },
                  })
                }
                author={{
                  name: item.credits?.[0]?.name ?? "Unknown",
                  image: item.credits?.[0]?.picture_url || item.thumbnail_url,
                }}
                image={item.thumbnail_url}
                title={item?.name}
                timer={item?.cook_time_minutes || 10}
              />
            )}
          />
        </FadeIn>
      )}
    </View>
  );
};

export default HomeScreen;
