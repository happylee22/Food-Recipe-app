import { createContext, ReactNode, useContext, useState } from "react";

type Ratings = {
  count_negative: number;
  count_positive: number;
  score: number;
};
type Credit = { name: string; picture_url: string };
type Tags = {
  display_name: string;
  name: string;
};
export interface Recipe {
  id: number;
  name: string;
  thumbnail_url: string;
  description?: string;
  cook_time_minutes: number | null;
  image: string;
  user_ratings: Ratings;
  credits: Credit[] | null;
  tags: Tags[] | null;
}

interface RecipeContextType {
  recipes: Recipe[];
  setRecipes: (recipes: Recipe[]) => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export function RecipeProvider({ children }: { children: ReactNode }) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipes must be used inside RecipeProvider");
  }
  return context;
}
