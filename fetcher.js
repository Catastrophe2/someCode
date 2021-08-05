import axios from "axios";
import { URL } from "./config";

export const fetcher = async (URL, HEADERS) => {
  const response = await axios.get(URL, {
    headers: HEADERS,
  });
  return response.data;
};

export const jokeDispatcher = async () => {
  const response = await fetcher(URL, { Accept: "application/json" });

  return { type: "GETMEAJOKE", data: response.joke };
};
