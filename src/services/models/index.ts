export interface ICardItem {
  name: string;
  description: string;
  language: string;
  star: number;
  fork: number;
}

export interface IUser {
  id: string;
  username: string | null;
  fullname?: string | null;
  email?: string | null;
  socialType: string;
  creationDate?: number;
  photo?: string | null;
}
