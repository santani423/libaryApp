export type author = {
  id: number;
  name: string;
  bio: string;
  bookCount: number;
  accumulatedScore: number;
};

export type AuthorsApiResponse = {
  success: boolean;
  message: string;
  data?: {
    authors?: author[];
  };
};
