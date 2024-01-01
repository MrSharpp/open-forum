"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { getRelatedPosts } from "../action";
import { Post } from "@/lib-server/types";
import Link from "next/link";

export function RelatedPosts({ slug }: { slug: string }) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getRelatedPosts(slug).then((items) => setPosts(items as unknown as Post[]));
  }, [slug]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>Related Posts</h1>
      {posts.map((item) => (
        <Card key={item.id} className="p-4">
          <CardTitle>
            <Link href={item.slug}>{item.title}</Link>
          </CardTitle>
        </Card>
      ))}
    </div>
  );
}
