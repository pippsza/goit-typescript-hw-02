import axios from "axios";
import { BackendObj } from "../../types/BackendObj";
interface IResponceData {
  results: BackendObj[];
}
export const fetchPhotosByQuery = async (
  topic: string,
  currentPage: number
): Promise<BackendObj[]> => {
  const axiosOptions = {
    params: {
      query: topic,
      client_id: "0xFw0fsfncTJR3UQA9BTOt1vOaGllxXaYkfRuukCxhE",
      page: currentPage,
      per_page: 10,
    },
  };

  const response = await axios.get<IResponceData>(
    `https://api.unsplash.com/search/photos`,
    axiosOptions
  );

  return response.data.results;
};
