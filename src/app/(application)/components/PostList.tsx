import React from "react";
import PostListItem from "./PostListItem";
import { getHomepagePosts } from "../actions";

async function PostList() {
  const posts = await getHomepagePosts();

  return (
    <div className="mt-4 pt-2 text-sm flex flex-col gap-3">
      <div className="py-2 px-3 grid grid-cols-8 bg-neutral-100 rounded-md gap-2">
        <div className="col-span-5 font-bold text-neutral-600">Topic</div>
        <div className="font-bold text-neutral-600">Replies</div>
        <div className="font-bold text-neutral-600">Views</div>
        <div className="font-bold text-neutral-600">Latest</div>
      </div>

      {posts.map((post) => {
        return <PostListItem key={post.id} data={post} />;
      })}
    </div>
  );
}

export default PostList;
