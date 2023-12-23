import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <button className="bg-teal-500 p-10 m-10 rounded-sm">Hel</button>

      <Button variant={"default"}> Hello </Button>
      <Button variant={"destructive"}> Hello </Button>
      <Button variant={"ghost"}> Hello </Button>
      <Button variant={"link"}> Hello </Button>
      <Button variant={"outline"}> Hello </Button>
      <Button variant={"secondary"}> Hello </Button>
    </div>
  );
}
