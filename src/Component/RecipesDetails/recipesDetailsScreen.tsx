import { useHealthyRecipes } from "@/Hooks/healthyRecipiesContext";
import { useRecipes } from "@/Hooks/recipeContext";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import Title from "../title/CustomTitle";
import { styles } from "./details";

const RecipesDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { recipes } = useRecipes();
  const { healthyRecipes } = useHealthyRecipes();

  const recipe =
    recipes.find((r) => String(r.id) === String(id)) ??
    healthyRecipes.find((r) => String(r.id) === String(id));

  if (!recipe) return <Text>Recipe not found</Text>;

  const { updated_at, ...nutrition } = recipe?.nutrition ?? {};
  const nutritionKeys = Object.keys(nutrition);
  const instructions = recipe.instructions ?? [];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: recipe.thumbnail_url }} style={styles.image} />
        <Title text={recipe.name} style={{ marginBottom: 16, marginTop: 32 }} />
        {nutritionKeys.map((key) => (
          <View key={key} style={styles.row}>
            <Text style={styles.key}>{key}</Text>
            <Text style={styles.value}>
              {nutrition[key as keyof typeof nutrition]}
            </Text>
          </View>
        ))}
        <Title style={{ marginTop: 32 }} text="Instructions" />
        {instructions.map((instruction) => (
          <View key={instruction?.id} style={styles.instructionRow}>
            <Text style={styles.index}>{instruction.position}</Text>
            <Text style={styles.InstructionText}>
              {instruction?.display_text}
            </Text>
          </View>
        ))}
        {!instructions?.length ? (
          <Text style={styles.value}> No Instructions Found</Text>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default RecipesDetailsScreen;
