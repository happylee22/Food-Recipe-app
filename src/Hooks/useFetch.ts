import axios from "axios";
export const getRecipiesList = async (
  tags: string | null = null,
  size: number | string = 20,
  from: number = 0,
) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: {
      from: String(from),
      size: size || "20",
      tags,
    },
    headers: {
      "x-rapidapi-key": process.env.EXPO_PUBLIC_RAPIDAPI_KEY,
      "x-rapidapi-host": "tasty.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);
  return response;
};
