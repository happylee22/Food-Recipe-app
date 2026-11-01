import { createContext, ReactNode, useContext, useState } from "react";

type Ratings = {
  count_negative: number;
  count_positive: number;
  score: number;
};
type Credit = { name: string; picture_url: string };

export interface Recipe {
  id: number;
  name: string;
  thumbnail_url: string;
  description?: string;
  cook_time_minutes: number | null;
  image: string;
  user_ratings: Ratings;
  credits: Credit[] | null;
}

interface RecipeContextType {
  healthyRecipes: Recipe[];
  setHealthyRecipes: (recipes: Recipe[]) => void;
}

const HealthyRecipeContext = createContext<RecipeContextType | undefined>(
  undefined,
);

export function HealthyRecipeProvider({ children }: { children: ReactNode }) {
  const [healthyRecipes, setHealthyRecipes] = useState<Recipe[]>([]);

  return (
    <HealthyRecipeContext.Provider
      value={{ healthyRecipes, setHealthyRecipes }}
    >
      {children}
    </HealthyRecipeContext.Provider>
  );
}

export function useHealthyRecipes() {
  const context = useContext(HealthyRecipeContext);
  if (!context) {
    throw new Error("useRecipes must be used inside RecipeProvider");
  }
  return context;
}
