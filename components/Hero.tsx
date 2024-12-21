"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Summer Collection 2024
          </h1>
          <p className="mt-4 text-xl text-white/90">
            Discover our latest collection of premium products at unbeatable prices.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}