import { Reply } from "@/components/Reply";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authOptions } from "@/lib-server/auth";
import dayjs from "@/lib/dayjs";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { getPostBySlug, getPostSlugs } from "./action";
import { RelatedPosts } from "./components/RelatedPosts";
import ReplyView from "./components/ReplyView";
import { marked } from "marked";

export async function generateStaticParams() {
  const params = await getPostSlugs();

  return params.flatMap((param) => [
    { slug: param.slug },
    { slug: encodeURI(param.slug) },
  ]);
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
  const currentDate = new Date();

  // DISCUSS: merge these 2 promises and run them parallely?

  const post = await getPostBySlug(decodeURI(params.slug));

  const session = await getServerSession(authOptions);

  const isLoggedIn = !!session?.user;

  const html = marked.parse(post.body);

  return (
    <>
      <div className="flex flex-col gap-7 bg-gray-100 m-10 px-7 py-5 text-black  rounded-xl">
        <div className="col-span-5 flex gap-3">
          <Avatar>
            <AvatarImage
              src={`https://api.dicebear.com/7.x/avataaars-neutral/svg?seed=${post?.User?.email}`}
            />
            <AvatarFallback>{post.User.name}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <h3 className="font-bold text-sm">
              <span className="font-semibold">{post.User.name}</span>
            </h3>

            <div className="flex text-xs gap-2">
              <span className="text-neutral-600">
                {dayjs
                  .duration(
                    dayjs(post.created).diff(currentDate),
                    "milliseconds"
                  )
                  .humanize()}{" "}
                ago
              </span>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold">{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>

        {isLoggedIn && (
          <div className="flex gap-10  ml-auto">
            {/* TODO: Add Icon */}
            <Link href={"?reply=true"}>Reply</Link>
          </div>
        )}
      </div>

      {/* TODO: Extract innto seperate componennt? */}
      <div className="flex flex-col gap-3 bg-gray-100 mx-10 px-7 py-5 text-black  rounded-xl">
        {post.Replies.map((item) => (
          <ReplyView key={item.id} data={item} />
        ))}
      </div>

      {isReplying && <Reply postId={post.id} />}

      <RelatedPosts slug={post.slug} />
    </>
  );
}
