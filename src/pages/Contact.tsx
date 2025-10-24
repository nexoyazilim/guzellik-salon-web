import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { contactInfo, workingHours } from '../data/contact'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Demo only - no actual submission
    alert('Message sent! We will contact you soon.')
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-br from-rose-500 via-rose-600 to-purple-500 overflow-hidden">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFgL-wS7kAsiIrAZPQKm0t14y8LFCe4MrLUGsApX8OHajq0_KepudfSIhrNeeS6FP0_rU-6xIJAdKebTF2c2IjmnXFQOQkhqZP4pqBgmolu22Z_PqW0mvFm6gbuTa4fl9-_bRlT1iuMye3gxsu-imLKNnBkf0VytVkUo2o1cP0wNv4McuDcncAdVOeag-4jJp0WCjtL72N3fdF-EFAJMElNnsUhxnq_cf28v_TUdRXKt7DdmnVnWBKyEphLivufBfPwzN4ySFUGHxK" alt="Contact" className="absolute inset-0 w-full h-full object-cover opacity-40" />
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
            {t('contact.title', 'Contact Us')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl opacity-90 drop-shadow-md"
          >
            {t('contact.subtitle', 'Get in touch with our beauty experts')}
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-8">{t('contact.getInTouch', 'Get In Touch')}</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-rose-100 to-lavender-100 rounded-lg">
                      <MapPin className="text-rose-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t('contact.location', 'Location')}</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                    <p className="text-gray-600">{contactInfo.city}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-rose-100 to-lavender-100 rounded-lg">
                      <Phone className="text-rose-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t('contact.phone', 'Phone')}</h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-rose-600 hover:text-rose-700 font-semibold"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-rose-100 to-lavender-100 rounded-lg">
                      <Mail className="text-rose-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t('contact.email', 'Email')}</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-rose-600 hover:text-rose-700 font-semibold"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-rose-100 to-lavender-100 rounded-lg">
                      <Clock className="text-rose-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">{t('contact.workingHours', 'Working Hours')}</h3>
                    <div className="space-y-2">
                      {workingHours.map((hour, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-gray-600">{t(`days.${hour.day}`)}</span>
                          <span className={hour.closed ? 'text-gray-400' : 'font-semibold'}>
                            {hour.closed ? t('days.closed') : `${hour.open} - ${hour.close}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">{t('contact.form.name', 'Name')}</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors"
                    placeholder={t('contact.form.namePh', 'Your name')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">{t('contact.form.email', 'Email')}</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors"
                    placeholder={t('contact.form.emailPh', 'your@email.com')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">{t('contact.form.phone', 'Phone')}</label>
                  <input
                    type="tel"
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors"
                    placeholder={t('contact.form.phonePh', '+90 XXX XXX XXXX')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">{t('contact.form.subject', 'Subject')}</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors"
                    placeholder={t('contact.form.subjectPh', 'What is this about?')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">{t('contact.form.message', 'Message')}</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors resize-none"
                    placeholder={t('contact.form.messagePh', 'Your message...')}
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary text-lg">
                  {t('contact.form.send', 'Send Message')}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-96 bg-gray-200">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9593175152807!2d29.00868631541765!3d41.043920979297894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zQmXFn2lrdGHFnywgxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1650000000000!5m2!1str!2str`}
        ></iframe>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-gradient-to-r from-rose-500 to-lavender-500 overflow-hidden">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgRr3sWaS_LLFfd1Bdeu-xw6A4osJ1lT5NK0-ZYEMiPxBNgwTLxZ98d1eCsc-J0NQRIFaluwX-nAWmOPqywBSRhKGfutduMMHYBNVPqGKLctvu8o4jg6VUUc8hRu5MV7fk4HdD19-93FpXYjynFaYASyMl9rfbUxbh5EBcnXZ5Hyeab9CADG8B5WtwqRxfBe10hs6_5OxPn5ovzq8gRHuTB0XgL8D76M2sAu9QivNFvT95zD0mX9Kvv_E9SvvrneZ8AAkJUBQEkBKq" alt="Ready to Book" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl font-display font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-xl mb-8 opacity-90">{t('cta.subtitle')}</p>
          <a href="#/tr/randevu" className="inline-block px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
            {t('cta.bookNow')}
          </a>
        </div>
      </section>
    </div>
  )
}