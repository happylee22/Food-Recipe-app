import axios from "axios";
export const getRecipiesList = async (tags = null) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: {
      from: "0",
      size: "20",
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
