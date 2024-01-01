import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  StackedAvatar,
} from "@/components/ui/avatar";
import Link from "next/link";
import { getHomepagePosts } from "../actions";

type Props = {
  data: Awaited<ReturnType<typeof getHomepagePosts>>[number];
};

function PostListItem({ data }: Props) {
  return (
    <Link href={`/thread/${encodeURI(data.slug)}`} className="isolate">
      <div className="py-2 px-2 grid grid-cols-8 gap-2 hover:bg-neutral-100 rounded-md transition-all duration-150 cursor-pointer ">
        <div className="col-span-5 flex gap-3">
          <Avatar>
            <AvatarImage
              src={`https://api.dicebear.com/7.x/avataaars-neutral/svg?seed=${data.User.email}`}
            />
            <AvatarFallback>{data.User.name}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <h3 className="font-bold text-sm">
              <span>{data.title}</span>
            </h3>

            <div className="flex text-xs gap-2">
              <span className="font-semibold">{data.User.name}</span>

              <span className="text-neutral-600">
                {new Date(data.created).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="font-bold">{Number(data._count.Replies)}</span>
          <span className="text-xs font-semibold text-neutral-500 ">
            Replies
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-bold">{Number(data.views)}</span>
          <span className="text-xs font-semibold text-neutral-500 ">Views</span>
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
