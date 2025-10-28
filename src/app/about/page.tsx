import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "About Us - Luna Eclectic Emporium",
  description: "Learn more about Luna Eclectic Emporium and our passion for unique gifts and treasures",
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/2.jpg"
            alt="Luna Eclectic Emporium interior"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300">
            Discover the story behind Luna Eclectic Emporium
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              Welcome to Luna Eclectic Emporium, your premier destination for unique gifts and treasures in Charlottetown, Prince Edward Island. Our shop is a carefully curated collection of one-of-a-kind items that celebrate creativity, artistry, and individuality.
            </p>
            <p>
              At Luna Eclectic Emporium, we believe that the perfect gift tells a story. That&apos;s why we&apos;ve dedicated ourselves to sourcing distinctive items from local artisans, independent creators, and unique suppliers from around the world. Each piece in our store has been selected with care and attention to quality.
            </p>
            <p>
              Our passion is helping you find that special something - whether it&apos;s a gift for a loved one, a treat for yourself, or that perfect piece to complete your home. We take pride in offering personalized service and expert guidance to make your shopping experience memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-950 border-gray-800">
              <CardHeader>
                <div className="text-4xl mb-4">🎨</div>
                <CardTitle className="text-xl">Creativity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We celebrate unique, creative designs that stand out from the ordinary.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-950 border-gray-800">
              <CardHeader>
                <div className="text-4xl mb-4">🤝</div>
                <CardTitle className="text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Supporting local artists and craftspeople is at the heart of what we do.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-950 border-gray-800">
              <CardHeader>
                <div className="text-4xl mb-4">✨</div>
                <CardTitle className="text-xl">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Every item is carefully selected for its craftsmanship and quality.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-950 border-gray-800">
              <CardHeader>
                <div className="text-4xl mb-4">💝</div>
                <CardTitle className="text-xl">Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We&apos;re dedicated to providing personalized, friendly service to every customer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience Our Store</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/3.jpg"
                alt="Store interior view 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/4.jpg"
                alt="Store interior view 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/5.jpg"
                alt="Product display"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/6.jpg"
                alt="Unique items"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Visit Us in Charlottetown</h2>
          <p className="text-xl text-gray-300 mb-8">
            Located in the heart of beautiful Charlottetown, Prince Edward Island, we invite you to explore our unique collection in person.
          </p>
          <div className="bg-gray-950 border border-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Luna Eclectic Emporium</h3>
            <p className="text-gray-400 mb-2">Charlottetown, PEI</p>
            <p className="text-gray-400">Canada</p>
          </div>
        </div>
      </section>
    </div>
  );
}
