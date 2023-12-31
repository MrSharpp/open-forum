import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Account = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  access_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null;
};
export type Category = {
  id: string;
  name: string;
};
export type Post = {
  id: string;
  title: string;
  body: string;
  views: Generated<number>;
  upvotes: Generated<number>;
  created: Generated<Timestamp>;
  slug: string;
  categoryId: string;
  userId: string;
};
export type PostToTag = {
  A: string;
  B: string;
};
export type Reply = {
  id: string;
  body: string;
  created: Generated<Timestamp>;
  likes: Generated<number>;
  postId: string;
};
export type Session = {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Timestamp;
};
export type Tag = {
  id: string;
  name: string;
};
export type User = {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Timestamp | null;
  image: string | null;
  password: string;
};
export type VerificationToken = {
  identifier: string;
  token: string;
  expires: Timestamp;
};
export type DB = {
  _PostToTag: PostToTag;
  Account: Account;
  Category: Category;
  Post: Post;
  Reply: Reply;
  Session: Session;
  Tag: Tag;
  User: User;
  VerificationToken: VerificationToken;
};
