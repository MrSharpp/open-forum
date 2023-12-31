import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Categories = () => {
  const categories = [
    {
      title: "food",
      color: "yellow",
      description: "Different food color",
    },
    {
      title: "food",
      color: "red",
      description: "Different food color",
    },
    {
      title: "food",
      color: "yellow",
      description: "Different food color",
    },
    {
      title: "food",
      color: "#E0DFFD",
      description: "Different food color",
    },
    {
      title: "food",
      color: "#E0DFFD",
      description: "Different food color",
    },
  ];
  return (
    <div className="p-5">
      <div className="mb-4 text-black text-xl font-semibold">
        Browse by category
      </div>

      <div className="grid grid-cols-4 gap-4">
        {categories.map((category) => (
          <Card
            key={category.title}
            className={`w-[200px] bg-[${category.color}] hover:shadow-xl`}
          >
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Categories;
