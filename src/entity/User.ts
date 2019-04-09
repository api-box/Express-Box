import { Credential } from "./Credential";

export interface User {
  email: string;
  password: string;
  age: number;
  profileImagePath: string;
  birthDay: Date;
  name: string;
  bio: string;
  credential: Credential;
}
