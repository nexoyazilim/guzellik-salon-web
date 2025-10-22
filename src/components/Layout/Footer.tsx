import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-lavender-400 bg-clip-text text-transparent">
              Güzellik Salonu
            </h3>
            <p className="text-gray-400">
              Your destination for beauty, wellness, and self-care excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/booking" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-rose-400" />
                <span className="text-gray-400">+90 212 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-rose-400" />
                <span className="text-gray-400">info@guzelliksalonu.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-rose-400" />
                <span className="text-gray-400">Istanbul, Turkey</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-rose-500 hover:bg-rose-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-lavender-500 hover:bg-lavender-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-rose-500 hover:bg-rose-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Güzellik Salonu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}