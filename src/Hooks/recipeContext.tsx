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
type Tags = {
  display_name: string;
  name: string;
};
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
  tags: Tags[] | null;
  nutrition?: Nutrition | null;
  instructions?: Instruction[] | null;
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
