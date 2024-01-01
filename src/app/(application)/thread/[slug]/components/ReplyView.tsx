import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Reply, User } from "@/lib-server/types";
import dayjs from "@/lib/dayjs";
import { IconHeart } from "@tabler/icons-react";

type Props = {
  data: Reply & { User: User };
};

function ReplyView({ data }: Props) {
  return (
    <div>
      <div className="col-span-5 flex gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <h3 className="font-bold text-sm">
            <span className="font-semibold">{data.User.name}</span>
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
