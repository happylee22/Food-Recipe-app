import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DefaultTheme, router, Stack, ThemeProvider } from "expo-router";
import { TouchableOpacity } from "react-native";

const BackButton = (props: any) => {
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <FontAwesome name="long-arrow-left" size={24} />
    </TouchableOpacity>
  );
};
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};
export default function RootLayout() {
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
          }}
        />
        <Stack.Screen
          name="search"
          options={{
            title: "Search",
            headerTitleAlign: "center",
            headerBackVisible: false,
            headerLeft: (props) => <BackButton {...props} />,
            animation: "none",
            headerBackButtonDisplayMode: "minimal",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
