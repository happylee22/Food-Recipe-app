import {
  HealthyRecipeProvider,
  useHealthyRecipes,
} from "@/Hooks/healthyRecipiesContext";
import { RecipeProvider, useRecipes } from "@/Hooks/recipeContext";
import { getRecipiesList } from "@/Hooks/useFetch";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DefaultTheme, router, Stack, ThemeProvider } from "expo-router";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";

const BackButton = () => (
  <TouchableOpacity onPress={() => router.back()}>
    <FontAwesome name="long-arrow-left" size={24} />
  </TouchableOpacity>
);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};

function RootNavigator() {
  const { setRecipes, setIsLoading } = useRecipes();
  const { setHealthyRecipes, setIsLoading: setHealthyLoading } =
    useHealthyRecipes();

  // useEffect(() => {
  //   async () => {
  //     const rec = await handleRecipiesfetch();
  //     setRecipes(rec);
  //     const healthyRec = await handleRecipiesfetch("healthy", "5");
  //     setHealthyRecipes(healthyRec);
  //   };
  // }, []);
  useEffect(() => {
    const loadAll = async () => {
      try {
        setRecipes(await handleRecipesFetch(null, 20, 11));
      } finally {
        setIsLoading(false);
      }
    };

    const loadHealthy = async () => {
      try {
        setHealthyRecipes(await handleRecipesFetch("healthy", 10, 0));
      } finally {
        setHealthyLoading(false);
      }
    };

    loadAll(); // both start immediately, in parallel
    loadHealthy();
  }, []);

  const handleRecipesFetch = async (
    tags: string | null = null,
    size: number | string = 20,
    from: number = 0,
  ) => {
    try {
      const recipes = await getRecipiesList(tags, size, from);
      return recipes?.data.results ?? [];
    } catch (e) {
      console.log("error fetching recipies =>", e);
      return [];
    }
  };

  return (
    <ThemeProvider value={theme}>
      <Stack screenOptions={{ headerShadowVisible: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="homeScreen"
          options={{
            title: "Home",
            headerTitleAlign: "center",
            headerBackVisible: false,
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="search"
          options={{
            title: "Search recipies",
            headerTitleAlign: "center",
            headerTitleStyle: { fontWeight: "bold" },
            headerBackVisible: false,
            headerLeft: () => <BackButton />,
            animation: "none",
            headerBackButtonDisplayMode: "minimal",
          }}
        />
        <Stack.Screen
          name="detailsScreen"
          options={{
            title: "",
            headerTitleAlign: "center",
            headerBackVisible: false,
            headerLeft: () => <BackButton />,
            animation: "none",
            headerBackButtonDisplayMode: "minimal",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <HealthyRecipeProvider>
      <RecipeProvider>
        <RootNavigator />
      </RecipeProvider>
    </HealthyRecipeProvider>
  );
}
