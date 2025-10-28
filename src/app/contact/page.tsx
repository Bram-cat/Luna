"use client"

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-green-900/20 border border-green-800 text-green-400 px-6 py-4 rounded-lg">
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className="mt-2 min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" variant="default" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Visit Our Store</h2>
                <p className="text-gray-300 mb-8">
                  Come visit us in person to explore our full collection of unique gifts and treasures!
                </p>
              </div>

              <Card className="bg-black border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">📍</span>
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    <a href="https://maps.google.com/?q=Confederation+Court+Mall+111A+Grafton+St+Charlottetown+PE" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      Confederation Court Mall<br />
                      111A Grafton St<br />
                      Charlottetown, PE C1A 1K9
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-black border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    <a href="tel:+19028925862" className="hover:text-white transition-colors">
                      (902) 892-5862
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-black border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">✉️</span>
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    <a href="mailto:moonsnailpei@gmail.com" className="hover:text-white transition-colors">
                      moonsnailpei@gmail.com
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Image Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Find Us in Charlottetown</h2>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/8.jpg"
              alt="Charlottetown location"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-center text-gray-400 mt-6">
            Located in the heart of beautiful Charlottetown, Prince Edward Island
          </p>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Store Hours</h2>
          <Card className="bg-black border-gray-800">
            <CardContent className="pt-6">
              <div className="space-y-3 text-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white font-semibold">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white font-semibold">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white font-semibold">12:00 PM - 4:00 PM</span>
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
