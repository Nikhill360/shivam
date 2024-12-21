import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Smartphone, Watch, Headphones } from "lucide-react";

const categories = [
  {
    name: "Laptops",
    icon: Laptop,
    description: "Latest laptops from top brands",
  },
  {
    name: "Smartphones",
    icon: Smartphone,
    description: "Premium smartphones",
  },
  {
    name: "Smartwatches",
    icon: Watch,
    description: "Fitness & lifestyle watches",
  },
  {
    name: "Audio",
    icon: Headphones,
    description: "Premium audio gear",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <category.icon className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}