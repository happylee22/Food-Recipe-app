import { colors } from "@/constants/colors";
import { useRecipes } from "@/Hooks/recipeContext";
import { useMemo, useState } from "react";
import { FlatList, View } from "react-native";
import Cards from "../cards/cardsComponent";
import Input from "../Input/inputScreen";
import { styles } from "./searchStyle";

const SearchScreen = () => {
  const { recipes } = useRecipes();
  // const [filteredrecipies, setFilteredRecipies] = useState(recipes);
  const [keyWord, setkeyWord] = useState("");
  // useEffect(() => {
  //   if (keyWord?.length > 2) {
  //     const filterItem = recipes.filter((rec) =>
  //       rec?.name.toLowerCase().includes(keyWord?.toLowerCase()),
  //     );
  //     setFilteredRecipies(filterItem);
  //   } else {
  //     setFilteredRecipies([]);
  //   }
  // }, [keyWord, recipes]);

  const filteredRecipies = useMemo(() => {
    const key = keyWord.trim().toLowerCase();
    if (key.length < 3) return [];
    return recipes.filter((rec) => rec?.name.toLowerCase().includes(key));
  }, [recipes, keyWord]);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Search Here"
        placeholderTextColor={colors.lightGray}
        autoFocus
        value={keyWord}
        onChangeText={setkeyWord}
      />
      <FlatList
        data={filteredRecipies}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Cards
              author={{
                name: item.credits?.[0]?.name ?? "Unknown",
                image: item.credits?.[0]?.picture_url || item.thumbnail_url,
              }}
              image={item.thumbnail_url}
              title={item?.name}
              timer={item?.cook_time_minutes || 10}
            />
          );
        }}
      />
    </View>
  );
};

export default SearchScreen;
