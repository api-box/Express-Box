export interface User {
  email: string;
  pw: string;
  age: number;
  profileImagePath: string;
  birthday: Date;
  name: string;
  bio: string;
  credential: Credential;
}

export interface Credential {
  accessToken: string;
  refreshToken: string;
}

export interface Post {
  title: string;
  author: User;
  description: string;
  summary: string;
  likeCount: number;
  shareCount: number;
  comment: Post;
  uploadedFilePath: String[];
  type: PostType;
  root: Post | undefined;
}

export enum PostType {
  POST,
  COMMENT
}
