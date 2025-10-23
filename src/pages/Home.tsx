import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Heart, Zap } from 'lucide-react'
import { services } from '../data/services'
import { useTranslation } from 'react-i18next'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Home() {
  const featuredServices = services.slice(0, 6)
  const { t } = useTranslation()

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg"
            alt="Beauty Salon Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 floating-element"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 floating-element"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 floating-element"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            {...fadeInUp}
            className="text-5xl md:text-7xl font-display font-bold mb-6 text-white glassmorphism-hero drop-shadow-lg gradient-text"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto glassmorphism-hero drop-shadow-lg"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link to="/booking" className="btn-primary text-lg">
              {t('hero.bookAppointment')}
            </Link>
            <Link to="/services" className="btn-outline text-lg">
              {t('hero.exploreServices')}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-16"
          >
            <div className="glassmorphism-stats text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
              <p className="text-white/90 mt-2">{t('stats.happyClients')}</p>
            </div>
            <div className="glassmorphism-stats text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">15+</p>
              <p className="text-white/90 mt-2">{t('stats.expertStaff')}</p>
            </div>
            <div className="glassmorphism-stats text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
              <p className="text-white/90 mt-2">{t('stats.services')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">{t('services.featuredTitle')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('services.featuredSubtitle')}
            </p>
            <div className="mt-8 max-w-4xl mx-auto">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                alt="Services overview"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                className="service-card cursor-pointer flex flex-col"
              >
                <div className="h-40 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-600 dark:to-slate-700 flex-shrink-0 aspect-video relative">
                  <img 
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Sparkles className="text-rose-500 flex-shrink-0" size={20} />
                    </motion.div>
                    {service.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm flex-grow">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">
                      ${service.price}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-600 px-2 py-1 rounded-full">{service.duration}min</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-primary text-lg">
              {t('services.viewAllServices')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-rose-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-16"
          >
            {t('whyChooseUs.title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center card-glass p-8"
            >
              <div className="mb-4 flex justify-center">
                <motion.div 
                  className="p-4 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full shadow-lg pulse-glow"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Heart className="text-white" size={32} />
                </motion.div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{t('whyChooseUs.premiumQuality.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('whyChooseUs.premiumQuality.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center card-glass p-8"
            >
              <div className="mb-4 flex justify-center">
                <motion.div 
                  className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-lg pulse-glow"
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sparkles className="text-white" size={32} />
                </motion.div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{t('whyChooseUs.expertTeam.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('whyChooseUs.expertTeam.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center card-glass p-8"
            >
              <div className="mb-4 flex justify-center">
                <motion.div 
                  className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full shadow-lg pulse-glow"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Zap className="text-white" size={32} />
                </motion.div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{t('whyChooseUs.quickEasy.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('whyChooseUs.quickEasy.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-rose-500 via-rose-600 to-purple-500 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full floating-element"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full floating-element"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full floating-element"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/3992873/pexels-photo-3992873.jpeg"
              alt="Ready to book"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 drop-shadow-lg"
          >
            {t('cta.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl mb-8 opacity-90 drop-shadow-md"
          >
            {t('cta.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/booking"
              className="inline-block px-8 py-4 bg-white text-rose-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm"
            >
              {t('cta.bookNow')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}