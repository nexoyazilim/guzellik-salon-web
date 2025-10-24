import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { beforeAfterGallery } from '../data/beforeAfter'
import { useTranslation } from 'react-i18next'

interface SelectedImage {
  id: string
  before: string
  after: string
  title: string
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null)
  const [showAfter, setShowAfter] = useState(false)
  const { t } = useTranslation()

  // Featured single images (provided + sourced)
  const featuredImages = [
    // Provided by user
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJNfJi6YCFra1LtZgLJnDq1lZ1h_KZhLjnmtqCJV0nSZdLGDJvOocSfJ-BEEZOaPOBUsOJd73ONnKTZk8TPuS0TCQZj1jQKmRB911NuiHkOihnVN8sftjsUvEt4GoRdPVLYxRzszRMKu2dOs1UB2YrzEWvX26Sd6gm9WADqT8rLvqVep8HpNStinyIV2nfMIsw7pe6vI5jWdFzpgkq99xTTwd-uIG9yJHtVlivNE9KfOR0S4VRLHloDKDgqNQgKoWfo8vbJH3TuspJ', alt: 'Hair styling', category: 'hair' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3BnQEPXQvLGLkBnr50t3C2u8-ejDETZ-RHABy4S9WhcLJIJFQxW5cdxIU2PdYDYjB-ob-7f2xOKLPHoMX86EfxS-b8lt28dU39WbqkEMTBPeSPCScNJNaE37vxaaaommvc1l65jN8iZD-FbPBy7qNJ802it_EKhU__L-Ujdw4gKjDMerLOgfeYo1CDkXYQD9V62EEGNR0CD61TR4HAYgklscF37E-GWv3xLsPRipAcDNKAFlVunNEDk1HzgXtQR9qBLOEal4f2D-P', alt: 'Party makeup', category: 'makeup' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgRr3sWaS_LLFfd1Bdeu-xw6A4osJ1lT5NK0-ZYEMiPxBNgwTLxZ98d1eCsc-J0NQRIFaluwX-nAWmOPqywBSRhKGfutduMMHYBNVPqGKLctvu8o4jg6VUUc8hRu5MV7fk4HdD19-93FpXYjynFaYASyMl9rfbUxbh5EBcnXZ5Hyeab9CADG8B5WtwqRxfBe10hs6_5OxPn5ovzq8gRHuTB0XgL8D76M2sAu9QivNFvT95zD0mX9Kvv_E9SvvrneZ8AAkJUBQEkBKq', alt: 'Facial treatment', category: 'skincare' },
    // Sourced (Pexels/Unsplash)
    { src: 'https://images.pexels.com/photos/3212179/pexels-photo-3212179.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', alt: 'Spa ambience', category: 'massage' },
    { src: 'https://images.pexels.com/photos/275768/pexels-photo-275768.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', alt: 'Shoulder massage', category: 'massage' },
    { src: 'https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', alt: 'Skincare session', category: 'skincare' },
    { src: 'https://images.pexels.com/photos/7532753/pexels-photo-7532753.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', alt: 'Glam makeup', category: 'makeup' },
    { src: 'https://images.pexels.com/photos/774866/pexels-photo-774866.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', alt: 'Mirror makeup', category: 'makeup' },
    { src: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&w=800&h=600&q=80', alt: 'Beauty portrait', category: 'skincare' },
  ]

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedImage])

  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative section-padding bg-gradient-to-r from-rose-500 to-lavender-500 overflow-hidden">
        <img src="https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg" alt="Gallery" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">{t('gallery.title', 'Our Gallery')}</h1>
          <p className="text-xl opacity-90">{t('gallery.subtitle', 'See the transformations our team has created')}</p>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="section-padding bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title">{t('featured.title', 'Featured Gallery')}</h2>
            <p className="text-gray-600">{t('featured.subtitle', 'Handpicked looks from our work')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredImages.map((img, index) => (
              <motion.div
                key={`${img.src}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl shadow-lg h-64 bg-gray-200"
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <p className="font-semibold text-sm capitalize">{t(`categories.${img.category}`, img.category)}</p>
                    <h3 className="text-lg font-bold">{img.alt}</h3>
                  </div>
                </div>
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
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[85vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold">{t(`galleryData.${selectedImage.id}.title`)}</h2>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Image Comparison */}
              <div className="p-4 md:p-8 bg-gradient-to-br from-rose-50 to-lavender-50 overflow-auto">
                <div className="relative w-full">
                  {/* Before Image */}
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: showAfter ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <img
                      src={selectedImage.before}
                      alt={t('gallery.before', 'Before')}
                      className="w-full rounded-lg shadow-lg object-contain max-h-[60vh]"
                    />
                    <p className="text-center mt-4 font-semibold text-gray-700">{t('gallery.before', 'Before')}</p>
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
                      alt={t('gallery.after', 'After')}
                      className="w-full rounded-lg shadow-lg object-contain max-h-[60vh]"
                    />
                    <p className="text-center mt-4 font-semibold text-gray-700">{t('gallery.after', 'After')}</p>
                  </motion.div>
                </div>

                {/* Toggle Button */}
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setShowAfter(!showAfter)}
                    className="btn-primary"
                  >
                    {showAfter ? t('gallery.showBefore', 'Show Before') : t('gallery.showAfter', 'Show After')}
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