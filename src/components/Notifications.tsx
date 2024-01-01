import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { Notification } from "@/lib-server/types";

export async function Notifications({
  notifications,
}: {
  notifications: Notification[];
}) {
  // TODO: Fix Styling
  return (
    <Popover>
      <PopoverTrigger>
        <EnvelopeOpenIcon className="w-4 h-4" />
      </PopoverTrigger>
      <PopoverContent className="p-2 flex flex-col gap-2 w-[150px]">
        {notifications.map((item) => (
          <Link key={item.id} href={item.href}>
            {item.message}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
}
