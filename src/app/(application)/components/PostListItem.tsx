import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  StackedAvatar,
} from "@/components/ui/avatar";
import Link from "next/link";
import React from "react";

function PostListItem() {
  return (
    <Link href={`/thread/dummy`}>
      <div className="py-2 px-2 grid grid-cols-8 gap-2 hover:bg-neutral-100 rounded-md transition-all duration-150 cursor-pointer ">
        <div className="col-span-5 flex gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <h3 className="font-bold text-sm">
              <span>What is your favourite animal?</span>
            </h3>

            <div className="flex text-xs gap-2">
              <span className="font-semibold">Joh Doe</span>

              <span className="text-neutral-600">
                {new Date().toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="font-bold">{Math.floor(Math.random() * 1000)}</span>
          <span className="text-xs font-semibold text-neutral-500 ">
            Replies
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-bold">{Math.floor(Math.random() * 1000)}</span>
          <span className="text-xs font-semibold text-neutral-500 ">
            Replies
          </span>
        </div>

        <div className="flex flex-col avatar-stacked">
          <StackedAvatar>
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
          </StackedAvatar>
        </div>
      </div>
    </Link>
  );
}

export default PostListItem;
