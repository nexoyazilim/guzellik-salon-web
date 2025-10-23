import { useState } from 'react'
import { motion } from 'framer-motion'
import { services } from '../data/services'
import { staff, getAvailableSlots } from '../data/staff'
import { CheckCircle } from 'lucide-react'

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
      <section className="section-padding bg-gradient-to-r from-rose-500 to-lavender-500">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Book Appointment</h1>
          <p className="text-xl opacity-90">Secure your perfect beauty treatment</p>
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
                  <h2 className="text-3xl font-bold mb-8">Select a Service</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map(service => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        className="p-6 border-2 border-gray-200 rounded-lg hover:border-rose-500 hover:bg-rose-50 transition-colors text-left"
                      >
                        <h3 className="font-semibold text-lg">{service.name}</h3>
                        <p className="text-gray-600 text-sm mt-2">{service.description}</p>
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
                  <h2 className="text-3xl font-bold mb-2">Select a Specialist</h2>
                  <p className="text-gray-600 mb-8">Service: {selectedService?.name}</p>
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
                        <p className="text-rose-600 text-sm mb-3">{member.title}</p>
                        <p className="text-gray-600 text-sm">{member.bio}</p>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    className="mt-8 btn-outline"
                  >
                    Back
                  </button>
                </motion.div>
              )}

              {/* Step 3: Date & Time Selection */}
              {step === 3 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-3xl font-bold mb-2">Select Date & Time</h2>
                  <p className="text-gray-600 mb-8">
                    With {selectedStaff?.name} for {selectedService?.name}
                  </p>

                  <div className="mb-8">
                    <label className="block text-sm font-semibold mb-2">Date</label>
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
                      <label className="block text-sm font-semibold mb-4">Available Times</label>
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
                    Back
                  </button>
                </motion.div>
              )}

              {/* Step 4: Contact Information */}
              {step === 4 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-3xl font-bold mb-8">Your Information</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={bookingData.name}
                        onChange={handleContactChange}
                        required
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleContactChange}
                        required
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleContactChange}
                        required
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none"
                        placeholder="+90 XXX XXX XXXX"
                      />
                    </div>

                    {/* Summary */}
                    <div className="bg-gradient-to-br from-rose-50 to-lavender-50 p-6 rounded-lg mt-8">
                      <h3 className="font-bold mb-4">Booking Summary</h3>
                      <div className="space-y-2 text-sm">
                        <p>Service: <span className="font-semibold">{selectedService?.name}</span></p>
                        <p>Specialist: <span className="font-semibold">{selectedStaff?.name}</span></p>
                        <p>Date: <span className="font-semibold">{bookingData.date}</span></p>
                        <p>Time: <span className="font-semibold">{bookingData.time}</span></p>
                        <p className="border-t pt-2 mt-2">Total: <span className="font-bold text-rose-600">${selectedService?.price}</span></p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 btn-outline"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 btn-primary"
                      >
                        Confirm Booking
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
              <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-2">Thank you for booking with us</p>
              <p className="text-gray-600">A confirmation email has been sent to {bookingData.email}</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}