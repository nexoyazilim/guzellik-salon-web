import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { services } from '../data/services'
import { staff, getAvailableSlots } from '../data/staff'
import { CheckCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface BookingData {
  service: string
  staff: string
  date: string
  time: string
  name: string
  email: string
  phone: string
}

export default function Booking() {
  const { t } = useTranslation()
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState<BookingData>({
    service: '',
    staff: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [availableSlots, setAvailableSlots] = useState<string[]>([])

  const handleServiceSelect = (serviceId: string) => {
    setBookingData({ ...bookingData, service: serviceId })
    setStep(2)
  }

  const handleStaffSelect = (staffId: string) => {
    setBookingData({ ...bookingData, staff: staffId })
    setStep(3)
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.currentTarget.value
    setBookingData({ ...bookingData, date })
    if (date && bookingData.staff) {
      setAvailableSlots(getAvailableSlots(bookingData.staff, date))
    }
  }

  const handleTimeSelect = (time: string) => {
    setBookingData({ ...bookingData, time })
    setStep(4)
  }

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setBookingData({ ...bookingData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setStep(1)
      setBookingData({ service: '', staff: '', date: '', time: '', name: '', email: '', phone: '' })
    }, 3000)
  }

  const selectedService = services.find(s => s.id === bookingData.service)
  const selectedStaff = staff.find(s => s.id === bookingData.staff)

  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-br from-rose-500 via-rose-600 to-purple-500 overflow-hidden">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAslLELjwTownnBypGVeTRY_RYAIviKdZW-7tGtF8occutHXC3Y8frl1GBXASCG8YKbrHBO1tKn_RzePiB0nj5o9uSobs_iMu1a5tGifnlcWVSxpRRePUSrBzchxZnr_Buf6JsI5h_8D5-Rq0QanZ3QMUK6PSmwWxIueEURru-IW6lTNnAOXXK2OLQ7SUKvvVC7N8B3lZ_6zWOANZHmLuWkHSl_L2Lhw5jAyDRODJZU_1TTx9ZPylgvCU7yWNX76UJYZX7QWQ6vmECB" alt="Book" className="absolute inset-0 w-full h-full object-cover opacity-40" />
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
            {t('booking.title', 'Book Appointment')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl opacity-90 drop-shadow-md"
          >
            {t('booking.subtitle', 'Secure your perfect beauty treatment')}
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          {!submitted ? (
            <div>
              {/* Step Indicator */}
              <div className="flex justify-between mb-12">
                {[1, 2, 3, 4, 5].map(s => (
                  <div
                    key={s}
                    className={`flex-1 h-2 mx-1 rounded-full transition-colors ${
                      s <= step ? 'bg-rose-500' : 'bg-gray-200'
                    }`}
                  ></div>
                ))}
              </div>

              {/* Step 1: Service Selection */}
              {step === 1 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-3xl font-bold mb-8">{t('booking.selectService', 'Select a Service')}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map(service => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        className="p-6 border-2 border-gray-200 rounded-lg hover:border-rose-500 hover:bg-rose-50 transition-colors text-left"
                      >
                        <h3 className="font-semibold text-lg">{t(`servicesData.${service.id}.name`, service.name)}</h3>
                        <p className="text-gray-600 text-sm mt-2">{t(`servicesData.${service.id}.description`, service.description)}</p>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-rose-600 font-bold">${service.price}</span>
                          <span className="text-gray-500 text-sm">{service.duration}min</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Staff Selection */}
              {step === 2 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-3xl font-bold mb-2">{t('booking.selectStaff', 'Select a Specialist')}</h2>
                  <p className="text-gray-600 mb-8">{t('booking.serviceLabel', 'Service')}: {selectedService ? t(`servicesData.${selectedService.id}.name`, selectedService.name) : ''}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {staff.map(member => (
                      <button
                        key={member.id}
                        onClick={() => handleStaffSelect(member.id)}
                        className="p-6 border-2 border-gray-200 rounded-lg hover:border-rose-500 hover:bg-rose-50 transition-colors overflow-hidden"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="font-semibold text-lg">{member.name}</h3>
                        <p className="text-rose-600 text-sm mb-3">{t(`staffData.${member.id}.title`)}</p>
                        <p className="text-gray-600 text-sm">{t(`staffData.${member.id}.bio`)}</p>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    className="mt-8 btn-outline"
                  >
                    {t('common.back')}
                  </button>
                </motion.div>
              )}

              {/* Step 3: Date & Time Selection */}
              {step === 3 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-3xl font-bold mb-2">{t('booking.selectDateTime', 'Select Date & Time')}</h2>
                  <p className="text-gray-600 mb-8">
                    {t('booking.withStaff', 'With')} {selectedStaff?.name} {t('booking.forService', 'for')} {selectedService ? t(`servicesData.${selectedService.id}.name`, selectedService.name) : ''}
                  </p>

                  <div className="mb-8">
                    <label className="block text-sm font-semibold mb-2">{t('booking.date', 'Date')}</label>
                    <input
                      type="date"
                      value={bookingData.date}
                      onChange={handleDateChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  {bookingData.date && availableSlots.length > 0 && (
                    <div>
                      <label className="block text-sm font-semibold mb-4">{t('booking.availableTimes', 'Available Times')}</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {availableSlots.map(slot => (
                          <button
                            key={slot}
                            onClick={() => handleTimeSelect(slot)}
                            className={`p-3 rounded-lg font-semibold transition-colors ${
                              bookingData.time === slot
                                ? 'bg-rose-500 text-white'
                                : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setStep(2)}
                    className="mt-8 btn-outline"
                  >
                    {t('common.back')}
                  </button>
                </motion.div>
              )}

              {/* Step 4: Contact Information */}
              {step === 4 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-3xl font-bold mb-8">{t('booking.yourInfo', 'Your Information')}</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">{t('booking.name', 'Name')} *</label>
                      <input
                        type="text"
                        name="name"
                        value={bookingData.name}
                        onChange={handleContactChange}
                        required
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none"
                        placeholder={t('booking.namePlaceholder', 'Your name')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">{t('booking.email', 'Email')} *</label>
                      <input
                        type="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleContactChange}
                        required
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none"
                        placeholder={t('booking.emailPlaceholder', 'your@email.com')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">{t('booking.phone', 'Phone')} *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleContactChange}
                        required
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none"
                        placeholder={t('booking.phonePlaceholder', '+90 XXX XXX XXXX')}
                      />
                    </div>

                    {/* Summary */}
                    <div className="bg-gradient-to-br from-rose-50 to-lavender-50 p-6 rounded-lg mt-8">
                      <h3 className="font-bold mb-4">{t('booking.summary', 'Booking Summary')}</h3>
                      <div className="space-y-2 text-sm">
                        <p>{t('booking.serviceLabel', 'Service')}: <span className="font-semibold">{selectedService ? t(`servicesData.${selectedService.id}.name`, selectedService.name) : ''}</span></p>
                        <p>{t('booking.staffLabel', 'Specialist')}: <span className="font-semibold">{selectedStaff?.name}</span></p>
                        <p>{t('booking.date', 'Date')}: <span className="font-semibold">{bookingData.date}</span></p>
                        <p>{t('booking.time', 'Time')}: <span className="font-semibold">{bookingData.time}</span></p>
                        <p className="border-t pt-2 mt-2">{t('booking.total', 'Total')}: <span className="font-bold text-rose-600">${selectedService?.price}</span></p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 btn-outline"
                      >
                        {t('common.back', 'Back')}
                      </button>
                      <button
                        type="submit"
                        className="flex-1 btn-primary"
                      >
                        {t('booking.confirm', 'Confirm Booking')}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">{t('booking.confirmed', 'Booking Confirmed!')}</h2>
              <p className="text-gray-600 mb-2">{t('booking.thanks', 'Thank you for booking with us')}</p>
              <p className="text-gray-600">{t('booking.emailSent', 'A confirmation email has been sent to')} {bookingData.email}</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}