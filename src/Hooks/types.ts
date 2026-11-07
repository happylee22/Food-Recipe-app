export interface Ratings {
  count_negative: number;
  count_positive: number;
  score: number;
}
export interface Nutrition {
  calories?: number;
  protein?: number;
  fat?: number;
  carbohydrates?: number;
  sugar?: number;
  fiber?: number;
  updated_at?: string;
}
type Tags = {
  display_name: string;
  name: string;
};
export interface Instruction {
  id: number;
  position: number;
  display_text: string;
  start_time?: number;
  end_time?: number;
  temperature?: number | null;
  appliance?: string | null;
}
export interface Credit {
  name: string;
  picture_url: string;
}
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
