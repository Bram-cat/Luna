import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Reviews from "@/components/Reviews";
import HeroSlideshow from "@/components/HeroSlideshow";

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Slideshow */}
        <HeroSlideshow />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight drop-shadow-2xl">
              Luna Eclectic
              <br />
              <span className="text-gray-300">Emporium</span>
            </h1>
            <p className="text-xl md:text-3xl text-white mb-4 font-light drop-shadow-lg">
              Discover Unique Gifts & Treasures
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-lg">
              Charlottetown, Prince Edward Island
            </p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/about">
              <Button
                size="lg"
                variant="default"
                className="hover:scale-105 transition-transform"
              >
                Learn More
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="hover:scale-105 transition-transform"
              >
                Visit Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Makes Us Special
          </h2>

          {/* Circular Feature Image */}
          <div className="flex justify-center mb-16">
            <div className="relative w-64 h-64 rounded-full overflow-hidden ring-4 ring-gray-700 shadow-2xl hover:ring-gray-500 transition-all duration-300">
              <Image
                src="/5.jpg"
                alt="Luna Eclectic Emporium Featured Item"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Unique Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  Carefully curated collection of one-of-a-kind gifts, home
                  decor, and treasures you won&apos;t find anywhere else.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Local & Artisan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  Supporting local artists and craftspeople by showcasing their
                  beautiful handmade creations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Personal Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  Our friendly staff is dedicated to helping you find the
                  perfect gift for any occasion.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
              <div
                key={num}
                className="relative h-64 overflow-hidden rounded-lg group"
              >
                <Image
                  src={`/${num}.jpg`}
                  alt={`Gallery image ${num}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* CTA Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Discover Something Special?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Visit us today and explore our unique collection
          </p>
          <Link href="/contact">
            <Button size="lg" variant="default">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
