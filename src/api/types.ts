export type User = {
  email: string;
  password: string;
};

export type UserCard = {
  accessToken: string;
  user: User;
};
