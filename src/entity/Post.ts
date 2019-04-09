import { User } from "./User";
import { PostType } from "./PostType";

export interface Post {
  title: string;
  author: User;
  description: string;
  summary: string;
  likeCount: number;
  shareCount: number;
  comment?: Post;
  filePath: string;
  type: PostType;
  root?: Post;
}
