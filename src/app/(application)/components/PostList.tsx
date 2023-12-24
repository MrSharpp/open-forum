import React from "react";
import PostListItem from "./PostListItem";

function PostList() {
  let data = [0, 1, 2, 3];

  return (
    <div className="mt-4 pt-2 text-sm flex flex-col gap-3">
      <div className="py-2 px-3 grid grid-cols-6 bg-neutral-100 rounded-md gap-2">
        <div className="col-span-3 font-bold text-neutral-600">Topic</div>
        <div className="font-bold text-neutral-600">Replies</div>
        <div className="font-bold text-neutral-600">Views</div>
        <div className="font-bold text-neutral-600">Latest</div>
      </div>

      {data.map((i) => {
        return <PostListItem key={i} />;
      })}
    </div>
  );
}

export default PostList;
