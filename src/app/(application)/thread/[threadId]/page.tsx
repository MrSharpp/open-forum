import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  IconArrowBigUpLine,
  IconBell,
  IconHeart,
  IconShare3,
} from "@tabler/icons-react";

const Thread = ({ params }: any) => {
  return (
    <>
      <div className="flex flex-col gap-7 bg-gray-100 m-10 px-7 py-5 text-black  rounded-xl">
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
              <span className="text-neutral-600">22 days ago</span>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold">{params.thread}</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          corrupti repudiandae illum voluptatum, rerum, natus neque incidunt
          voluptatibus laborum omnis nobis assumenda, beatae pariatur fugit
          dicta! Autem odio officia dignissimos? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Alias porro, odio non quasi laudantium
          vitae neque repellendus nisi, vero eveniet voluptates! Voluptatibus
          exercitationem explicabo repellat provident enim facilis, nam sint!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in
          natus, nesciunt explicabo sit rerum, aperiam illum repellat voluptatum
          cumque atque consectetur, veritatis inventore eligendi corporis?
          Consequatur eaque debitis ipsa tenetur dolore, neque qui. Perspiciatis
          in similique laboriosam nulla harum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Optio sequi excepturi ut eius facilis.
          Porro quaerat quam fugiat corporis id vel inventore adipisci
          voluptatibus perspiciatis ut. Dolor nihil necessitatibus voluptates
          dolore est, provident error sed et tenetur, labore quam deserunt
          explicabo, vitae incidunt quasi tempora molestias totam? Alias
          voluptatum at qui, veritatis libero quos laboriosam dolore sint
          laborum, dolor autem magni cum?
        </span>

        <div className="flex gap-10 w-full">
          <Button className="w-full rounded-2xl gap-2 ">
            <IconArrowBigUpLine size={20} />
            Upvote
          </Button>

          <Button className="w-full rounded-2xl gap-2 ">
            <IconBell size={20} />
            Follow
          </Button>

          <Button className="w-full rounded-2xl gap-2 ">
            <IconShare3 size={20} />
            Share
          </Button>
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

          <div className="flex gap-1.5 items-center	mt-2 hover:text-red-600 w">
            <IconHeart size={14} />
            <span className="text-sm">Like</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thread;
