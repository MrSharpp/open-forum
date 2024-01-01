"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useDebounce } from "@uidotdev/usehooks";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { searchPosts } from "./action";

type Props = {};

function SearchModal({}: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [records, setRecords] = useState<
    Awaited<ReturnType<typeof searchPosts>>
  >([]);

  useEffect(() => {
    searchPosts(debouncedSearchTerm).then((resp) => {
      setRecords(resp);
    });
  }, [debouncedSearchTerm]);

  return (
    <Dialog>
      <DialogTrigger>
        <Input placeholder="Search Posts" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[550px] p-2 ">
        <Input
          placeholder="Search"
          value={searchTerm}
          onChange={(evt) => {
            setSearchTerm(evt.target.value);
          }}
        />

        {Boolean(records.length) && (
          <ScrollArea className="max-h-[300px]">
            {records.map((post) => (
              <Link href={`/thread/${post.slug}`} key={post.id}>
                <div className="py-2 px-2 grid grid-cols-8 gap-2 hover:bg-neutral-100 rounded-md transition-all duration-150 cursor-pointer ">
                  <div className="col-span-5 flex gap-3">
                    <Avatar>
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/avataaars-neutral/svg?seed=${post.User.email}`}
                      />
                      <AvatarFallback>{post.User.name}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <h3 className="font-bold text-sm">
                        <span>{post.title}</span>
                      </h3>

                      <div className="flex text-xs gap-2">
                        <span className="font-semibold">{post.User.name}</span>

                        <span className="text-neutral-600">
                          {new Date(post.created).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default SearchModal;
