export type BackendObj = {
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
