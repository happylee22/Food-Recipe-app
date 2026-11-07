import { createContext, ReactNode, useContext, useState } from "react";
import { Recipe } from "./types";

interface RecipeContextType {
  healthyRecipes: Recipe[];
  setHealthyRecipes: (recipes: Recipe[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  isLoading: boolean;
}

const HealthyRecipeContext = createContext<RecipeContextType | undefined>(
  undefined,
);

export function HealthyRecipeProvider({ children }: { children: ReactNode }) {
  const [healthyRecipes, setHealthyRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <HealthyRecipeContext.Provider
      value={{ healthyRecipes, setHealthyRecipes, setIsLoading, isLoading }}
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
