import { createContext, ReactNode, useContext, useState } from "react";
//ratings
type Ratings = {
  count_negative: number;
  count_positive: number;
  score: number;
};
//nutrition
type Nutrition = {
  calories?: number;
  protein?: number;
  fat?: number;
  carbohydrates?: number;
  sugar?: number;
  fiber?: number;
  updated_at?: string;
};
//credit
type Credit = { name: string; picture_url: string };
// instructions
type Instruction = {
  id: number;
  position: number;
  display_text: string;
  start_time?: number;
  end_time?: number;
  temperature?: number | null;
  appliance?: string | null;
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
  nutrition?: Nutrition | null;
  instructions?: Instruction[] | null;
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
