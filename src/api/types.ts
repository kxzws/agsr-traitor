type user = {
  email: string;
  password: string;
};

type userCard = {
  accessToken: string;
  user: user;
};

export type { userCard };
