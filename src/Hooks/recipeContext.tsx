import { createContext, ReactNode, useContext, useState } from "react";
//ratings
import { Recipe } from "./types";
interface RecipeContextType {
  recipes: Recipe[];
  setRecipes: (recipes: Recipe[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  isLoading: boolean;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export function RecipeProvider({ children }: { children: ReactNode }) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <RecipeContext.Provider
      value={{ recipes, setRecipes, setIsLoading, isLoading }}
    >
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
