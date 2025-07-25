import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-playfair gradient-text mb-4">Golden Crust</h3>
            <p className="text-gray-300 mb-6">
              Artisan bakery crafting the finest breads, cakes, and pastries with love. Fresh baked goods delivered to
              your doorstep.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/cloud-kitchen" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Cloud Kitchen
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Baker Street
                  <br />
                  Culinary District
                  <br />
                  Food City, FC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-BAKE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">orders@goldencrustbakery.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between text-gray-300">
                <span>Mon - Fri</span>
                <span>7AM - 8PM</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Saturday</span>
                <span>8AM - 9PM</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Sunday</span>
                <span>8AM - 6PM</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-orange-600/20 rounded-lg">
              <div className="flex items-center gap-2 text-orange-400 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-semibold">Now Open</span>
              </div>
              <p className="text-xs text-gray-300">Closes at 8:00 PM today</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Golden Crust Bakery. All rights reserved. Made with ❤️ for fresh baked goods lovers.
          </p>
        </div>
      </div>
    </footer>
  )
}
