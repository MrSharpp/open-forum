"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import dayjs from "@/lib/dayjs";
import { IconHeart } from "@tabler/icons-react";
import { toggleLikePost } from "./action";
import { useSession } from "next-auth/react";

type Props = {
  data: any;
};

function ReplyView({ data }: Props) {
  const session = useSession();

  return (
    <div>
      <div className="col-span-5 flex gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <h3 className="font-bold text-sm">
            <span className="font-semibold">Joh Doe</span>
          </h3>

          <div className="flex text-xs gap-2">
            <span className="text-neutral-600">
              {dayjs
                .duration(
                  dayjs(data.created as unknown as Date).diff(dayjs()),
                  "milliseconds"
                )
                .humanize()}{" "}
              ago
            </span>
          </div>
        </div>
      </div>

      <div>
        <span dangerouslySetInnerHTML={{ __html: data.body }} />

        <Button
          onClick={() => {
            toggleLikePost(data.id, session!.data!.user!.id as string);
          }}
          leftIcon={<IconHeart size={14} />}
          variant={"outline"}
          className="flex gap-1.5 hover:bg-white rounded-full shadow-none items-center mt-2 hover:text-red-600 w-max"
        >
          <span className="text-sm">Like</span>
        </Button>
      </div>
    </div>
  );
}

export default ReplyView;
