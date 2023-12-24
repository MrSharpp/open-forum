import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

function PostListItem() {
  return (
    <div className="py-2 px-2 grid grid-cols-6 gap-2 ">
      <div className="col-span-3 text-neutral-600 flex gap-2 ">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
          impedit?
        </span>
      </div>

      <div className="flex flex-col">
        <span className="font-bold">{Math.floor(Math.random() * 1000)}</span>
        <span className="text-xs font-semibold text-neutral-500 ">Replies</span>
      </div>

      <div className="flex flex-col">
        <span className="font-bold">{Math.floor(Math.random() * 1000)}</span>
        <span className="text-xs font-semibold text-neutral-500 ">Replies</span>
      </div>

      <div className="flex flex-col avatar-stacked">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default PostListItem;
