import axios from "axios";
type BackendObj = {
  color: string;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    username: string;
    total_likes: number;
  };
  id: string;
};
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

  const response = await axios.get(
    `https://api.unsplash.com/search/photos`,
    axiosOptions
  );

  return response.data.results;
};
