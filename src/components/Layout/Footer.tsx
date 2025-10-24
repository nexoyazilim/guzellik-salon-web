import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { normalizeLng, pathFor } from '../../utils/paths'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const params = useParams()
  const lng = normalizeLng(params.lng)
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-lavender-400 bg-clip-text text-transparent">
              {t('common.salonName')}
            </h3>
            <p className="text-gray-400">
              {t('footer.brandDescription', 'Your destination for beauty, wellness, and self-care excellence.')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.quickLinks', 'Quick Links')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to={pathFor(lng, 'home')} className="text-gray-400 hover:text-rose-400 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to={pathFor(lng, 'services')} className="text-gray-400 hover:text-rose-400 transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to={pathFor(lng, 'booking')} className="text-gray-400 hover:text-rose-400 transition-colors">
                  {t('hero.bookAppointment')}
                </Link>
              </li>
              <li>
                <Link to={pathFor(lng, 'gallery')} className="text-gray-400 hover:text-rose-400 transition-colors">
                  {t('nav.gallery')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.contact', 'Contact')}</h4>
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
                <span className="text-gray-400">{t('footer.cityCountry', 'Istanbul, Turkey')}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.followUs', 'Follow Us')}</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-rose-500 hover:bg-rose-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-rose-500 hover:bg-rose-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
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
            © {currentYear} {t('common.salonName')}. {t('footer.allRights', 'All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  )
}