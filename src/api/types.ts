export type User = {
  email: string;
  password: string;
};

export type UserCard = {
  accessToken: string;
  user: User;
};

export type TableData = {
  id: number;
  name: string;
  mark: string;
  infSystemNameRU: string;
  infSystemNameEN: string;
  standard: boolean;
  description: string | null;
  anchor: string | null;
  descriptionDoc: string;
  descriptionSwagger: string;
  reqSample: string;
  ansSample: string;
  accessMark: string | null;
  accessDescription: string;
  GIS: string | null;
  registrationNumber: string | null;
  registrationDate: string | null;
  location: string | null;
  GISAccessMark: string | null;
  GISAccessDescription: string | null;
  GISUNP: string | null;
  GISOwner: string | null;
};
