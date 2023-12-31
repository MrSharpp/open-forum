import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IconHeart } from "@tabler/icons-react";
import { getPostBySlug, getPostSlugs } from "./action";
import Link from "next/link";
import { Reply } from "@/components/Reply";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib-server/auth";

export async function generateStaticParams() {
  const paths = await getPostSlugs();
  console.log(paths);
  return paths;
}

export const dynamicParams = false;

export default async function SinglePost({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { reply: boolean };
}) {
  const isReplying = searchParams.reply;

  // DISCUSS: merge these 2 promises and run them parallely?

  const post = await getPostBySlug(params.slug);

  const session = await getServerSession(authOptions);

  const isLoggedIn = !!session?.user;

  return (
    <>
      <div className="flex flex-col gap-7 bg-gray-100 m-10 px-7 py-5 text-black  rounded-xl">
        <div className="col-span-5 flex gap-3">
          <Avatar>
            <AvatarImage
              src={`https://api.dicebear.com/7.x/avataaars-neutral/svg?seed=${post.User.email}`}
            />
            <AvatarFallback>{post.User.name}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <h3 className="font-bold text-sm">
              <span className="font-semibold">{post.User.name}</span>
            </h3>

            <div className="flex text-xs gap-2">
              <span className="text-neutral-600">22 days ago</span>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold">{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.body }}></div>

        {isLoggedIn && (
          <div className="flex gap-10  ml-auto">
            {/* TODO: Add Icon */}
            <Link href={"?reply=true"}>Reply</Link>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 bg-gray-100 mx-10 px-7 py-5 text-black  rounded-xl">
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
              <span className="text-neutral-600">5 days ago</span>
            </div>
          </div>
        </div>

        <div>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rem
            exercitationem iusto possimus voluptates repudiandae accusantium
            culpa consequuntur quia vero praesentium unde, repellat deleniti
            obcaecati quisquam sit natus reiciendis ea?
          </span>

          <Button
            leftIcon={<IconHeart size={14} />}
            variant={"outline"}
            className="flex gap-1.5 hover:bg-white rounded-full shadow-none items-center mt-2 hover:text-red-600 w-max"
          >
            <span className="text-sm">Like</span>
          </Button>
        </div>
      </div>

      {isReplying && <Reply postId={post.id} />}
    </>
  );
}
