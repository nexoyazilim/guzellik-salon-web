import { useState } from 'react'
import { motion } from 'framer-motion'
import { services, serviceCategories, type Service } from '../data/services'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { normalizeLng, pathFor } from '../utils/paths'
import { useTranslation } from 'react-i18next'

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const params = useParams()
  const lng = normalizeLng(params.lng)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const filteredServices = selectedCategory
    ? services.filter(s => s.category === selectedCategory)
    : services

  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-br from-rose-500 via-rose-600 to-purple-500 overflow-hidden">
        <img src="https://images.pexels.com/photos/3992873/pexels-photo-3992873.jpeg" alt="Services" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-black/20" />
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-16 w-32 h-32 bg-white/10 rounded-full floating-element"></div>
          <div className="absolute bottom-16 right-16 w-24 h-24 bg-white/10 rounded-full floating-element"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full floating-element"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-full floating-element"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center text-white relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-display font-bold mb-4 drop-shadow-lg"
          >
            {t('servicesPage.title', 'Our Services')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl opacity-90 drop-shadow-md"
          >
            {t('servicesPage.subtitle', 'Discover our complete range of beauty treatments')}
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              onClick={() => setSelectedCategory(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === null
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg shadow-rose-500/30'
                  : 'bg-white/10 text-gray-700 hover:bg-white/20 backdrop-blur-sm border border-white/20'
              }`}
            >
              {t('servicesPage.all', 'All Services')}
            </motion.button>
            {serviceCategories.map(cat => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 capitalize ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg shadow-rose-500/30'
                    : 'bg-white/10 text-gray-700 hover:bg-white/20 backdrop-blur-sm border border-white/20'
                }`}
              >
                {t(`categories.${cat.id}`, cat.name)}
              </motion.button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service: Service, index: number) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                className="service-card"
              >
                <div className="h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  <img 
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">{t(`servicesData.${service.id}.name`, service.name)}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{t(`servicesData.${service.id}.description`, service.description)}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">${service.price}</p>
                      <p className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{service.duration} {t('common.minutes')}</p>
                    </div>
                    <motion.button 
                      className="btn-primary text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate(pathFor(lng, 'booking'))}
                    >
                      {t('common.book', 'Book')}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-rose-50 to-purple-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 floating-element"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 floating-element"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {t('servicesPage.ctaTitle', 'Ready to Transform?')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8"
          >
            {t('servicesPage.ctaSubtitle', 'Choose your favorite service and book your appointment today')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={pathFor(lng, 'booking')} className="btn-primary text-lg">
              {t('hero.bookAppointment')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}