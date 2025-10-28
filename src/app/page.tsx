import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/1.jpg"
            alt="Luna Eclectic Emporium storefront"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Luna Eclectic Emporium
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Discover Unique Gifts & Treasures in Charlottetown, PEI
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/about">
              <Button variant="default" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-lg px-8 py-6">
                Visit Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">What Makes Us Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Unique Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  Carefully curated collection of one-of-a-kind gifts, home decor, and treasures you won't find anywhere else.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Local & Artisan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  Supporting local artists and craftspeople by showcasing their beautiful handmade creations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Personal Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  Our friendly staff is dedicated to helping you find the perfect gift for any occasion.
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
            {[2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div key={num} className="relative h-64 overflow-hidden rounded-lg group">
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
          <h2 className="text-4xl font-bold mb-6">Ready to Discover Something Special?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Visit us today and explore our unique collection
          </p>
          <Link href="/contact">
            <Button variant="default" className="text-lg px-8 py-6">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
