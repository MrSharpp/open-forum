import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IconHeart } from "@tabler/icons-react";
import { getPostBySlug, getPostSlugs } from "./action";

export async function generateStaticParams() {
  return await getPostSlugs();
}

export const dynamicParams = false;

export default async function SinglePost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

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

        <div className="flex gap-10 w-full">
          {/* <Button className="w-full rounded-2xl gap-2 ">
            <IconArrowBigUpLine size={20} />
            Upvote
          </Button> */}

          {/* <Button className="w-full rounded-2xl gap-2 ">
            <IconBell size={20} />
            Follow
          </Button>

          <Button className="w-full rounded-2xl gap-2 ">
            <IconShare3 size={20} />
            Share
          </Button> */}
        </div>
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
    </>
  );
}
