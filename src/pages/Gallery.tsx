import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { beforeAfterGallery } from '../data/beforeAfter'

interface SelectedImage {
  id: string
  before: string
  after: string
  title: string
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null)
  const [showAfter, setShowAfter] = useState(false)

  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-padding bg-gradient-to-r from-rose-500 to-lavender-500">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Our Gallery</h1>
          <p className="text-xl opacity-90">See the transformations our team has created</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="cursor-pointer group"
                onClick={() => {
                  setSelectedImage({
                    id: item.id,
                    before: item.before,
                    after: item.after,
                    title: item.title,
                  })
                  setShowAfter(false)
                }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg h-64 bg-gray-200">
                  <motion.img
                    src={item.before}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <p className="font-semibold text-sm">Before</p>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-4 text-gray-600 font-semibold">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Image Comparison */}
              <div className="p-8 bg-gradient-to-br from-rose-50 to-lavender-50">
                <div className="relative w-full max-h-96">
                  {/* Before Image */}
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: showAfter ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <img
                      src={selectedImage.before}
                      alt="Before"
                      className="w-full rounded-lg shadow-lg"
                    />
                    <p className="text-center mt-4 font-semibold text-gray-700">Before</p>
                  </motion.div>

                  {/* After Image */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showAfter ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-full"
                  >
                    <img
                      src={selectedImage.after}
                      alt="After"
                      className="w-full rounded-lg shadow-lg"
                    />
                    <p className="text-center mt-4 font-semibold text-gray-700">After</p>
                  </motion.div>
                </div>

                {/* Toggle Button */}
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setShowAfter(!showAfter)}
                    className="btn-primary"
                  >
                    {showAfter ? 'Show Before' : 'Show After'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}