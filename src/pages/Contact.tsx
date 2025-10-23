import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { contactInfo, workingHours } from '../data/contact'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Demo only - no actual submission
    alert('Message sent! We will contact you soon.')
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-padding bg-gradient-to-r from-rose-500 to-lavender-500">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">Get in touch with our beauty experts</p>
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
              <h2 className="text-4xl font-display font-bold mb-8">Get In Touch</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-rose-100 to-lavender-100 rounded-lg">
                      <MapPin className="text-rose-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Location</h3>
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
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
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
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
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
                    <h3 className="font-semibold text-lg mb-3">Working Hours</h3>
                    <div className="space-y-2">
                      {workingHours.map((hour, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-gray-600">{hour.day}</span>
                          <span className={hour.closed ? 'text-gray-400' : 'font-semibold'}>
                            {hour.closed ? 'Closed' : `${hour.open} - ${hour.close}`}
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
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors"
                    placeholder="+90 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary text-lg">
                  Send Message
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
      <section className="section-padding bg-gradient-to-r from-rose-500 to-lavender-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-display font-bold mb-6">Ready to Book?</h2>
          <p className="text-xl mb-8 opacity-90">
            Visit us today or schedule your appointment online
          </p>
          <a href="/booking" className="inline-block px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
            Book Appointment
          </a>
        </div>
      </section>
    </div>
  )
}