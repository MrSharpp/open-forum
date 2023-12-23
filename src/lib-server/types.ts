import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

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
    categoryId: string;
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
export type Tag = {
    id: string;
    name: string;
};
export type DB = {
    _PostToTag: PostToTag;
    Category: Category;
    Post: Post;
    Reply: Reply;
    Tag: Tag;
};
