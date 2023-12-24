import { Button } from "@/components/ui/button";
import PostList from "./components/PostList";

export default function Home() {
  return (
    <div>
      <div className="p-4">
        <h1 className="font-bold text-xl">FORUMX COMMUNITY</h1>

        <PostList />
      </div>
    </div>
  );
}
