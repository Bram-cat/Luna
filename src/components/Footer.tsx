import Link from "next/link"
import { Phone, Mail, MapPin, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Store Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Stogies Charlottetown</h3>
            <p className="text-gray-400 mb-4">
              Your premier tobacco shop offering premium cigars, pipes, vape products, and smoking accessories in PEI
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://www.facebook.com/StogiesCharlottetown" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <a href="https://maps.google.com/?q=15+St+Peters+Rd+6+Charlottetown+PE" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-white transition-colors">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>15 St Peters Rd #6<br/>Charlottetown, PE</span>
              </a>
              <a href="tel:+19026286794" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(902) 628-6794</span>
              </a>
              <a href="mailto:jwincey@hotmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>jwincey@hotmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Stogies Charlottetown. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
