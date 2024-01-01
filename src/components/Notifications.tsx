import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { Notification } from "@prisma/client";
import { markNotificationsAsRead } from "./action";

export async function Notifications({
  notifications,
}: {
  notifications: Notification[];
}) {
  // update the notification to read if there is any unread notifs
  const hasUnread = notifications.some((item) => item.read === true);

  if (hasUnread) {
    // Get user id from prop?
    await markNotificationsAsRead(notifications[0].userId);
  }

  // TODO: Fix Styling
  // TODO: If notification is empty show a message that there is no notification
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
