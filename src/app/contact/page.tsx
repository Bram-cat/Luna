import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/7.jpg"
            alt="Contact us"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-300">
            We&apos;d love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Visit Our Store</h2>
                <p className="text-gray-300 mb-8">
                  Come visit us in person to explore our premium selection of tobacco and vape products!
                </p>
              </div>

              <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">📍</span>
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base">
                    <a href="https://maps.google.com/?q=15+St+Peters+Rd+6+Charlottetown+PE" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      15 St Peters Rd #6<br />
                      Charlottetown, PE
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base">
                    <a href="tel:+19026286794" className="hover:text-white transition-colors">
                      (902) 628-6794
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">✉️</span>
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base">
                    <a href="mailto:jwincey@hotmail.com" className="hover:text-white transition-colors">
                      jwincey@hotmail.com
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">📘</span>
                    Facebook
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base">
                    <a href="https://www.facebook.com/StogiesCharlottetown" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      StogiesCharlottetown
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">Find Us on the Map</h2>
                <p className="text-gray-300 mb-8">
                  Located in Charlottetown, Prince Edward Island
                </p>
              </div>

              <div className="relative w-full h-[500px] rounded-xl overflow-hidden border-2 border-gray-800 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.4729485856!2d-63.13697!3d46.23888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e52daa4e64df3%3A0x5f8f8f8f8f8f8f8f!2s15%20St%20Peters%20Rd%2C%20Charlottetown%2C%20PE!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Stogies Charlottetown Location"
                  className="grayscale-[20%] contrast-125"
                ></iframe>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-400 text-sm text-center">
                  <a
                    href="https://maps.google.com/?q=15+St+Peters+Rd+6+Charlottetown+PE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline font-medium"
                  >
                    Open in Google Maps →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Store Hours</h2>
          <Card className="bg-gray-950 border-gray-800">
            <CardContent className="pt-6">
              <div className="space-y-4 text-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white font-semibold">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white font-semibold">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white font-semibold">10:00 AM - 8:00 PM</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-gray-400 mt-6">
            Hours may vary during holidays. Please call ahead to confirm.
          </p>
        </div>
      </section>
    </div>
  );
}
