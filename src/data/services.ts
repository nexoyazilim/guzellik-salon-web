export interface Service {
  id: string
  name: string
  category: 'hair' | 'makeup' | 'skincare' | 'massage'
  description: string
  price: number
  duration: number // in minutes
  icon: string
  image: string
}

export const services: Service[] = [
  // Hair Services
  {
    id: 'hair-1',
    name: 'Haircut & Styling',
    category: 'hair',
    description: 'Professional haircut with personalized styling consultation',
    price: 450,
    duration: 60,
    icon: 'scissors',
    image: 'https://images.pexels.com/photos/7755294/pexels-photo-7755294.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    id: 'hair-2',
    name: 'Hair Coloring',
    category: 'hair',
    description: 'Full or partial hair coloring with premium products',
    price: 750,
    duration: 90,
    icon: 'palette',
    image: 'https://images.pexels.com/photos/8468125/pexels-photo-8468125.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    id: 'hair-3',
    name: 'Keratin Treatment',
    category: 'hair',
    description: 'Smoothing and nourishing treatment for silky hair',
    price: 950,
    duration: 120,
    icon: 'sparkles',
    image: 'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    id: 'hair-4',
    name: 'Balayage Highlights',
    category: 'hair',
    description: 'Hand-painted highlights for natural-looking dimension',
    price: 850,
    duration: 110,
    icon: 'highlighter',
    image: 'https://images.pexels.com/photos/29548298/pexels-photo-29548298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  // Makeup Services
  {
    id: 'makeup-1',
    name: 'Bridal Makeup',
    category: 'makeup',
    description: 'Elegant makeup for your special day',
    price: 1200,
    duration: 90,
    icon: 'heart',
    image: 'https://unsplash.com/photos/y9HsMX3-mUY/download?force=true&w=800',
  },
  {
    id: 'makeup-2',
    name: 'Party Makeup',
    category: 'makeup',
    description: 'Bold and glamorous makeup for events',
    price: 600,
    duration: 60,
    icon: 'star',
    image: 'https://images.unsplash.com/photo-1573893159776-6dc982a8432f?auto=format&fit=crop&w=800&h=600&q=80',
  },
  {
    id: 'makeup-3',
    name: 'Natural Makeup',
    category: 'makeup',
    description: 'Fresh, natural-looking makeup for everyday',
    price: 400,
    duration: 45,
    icon: 'sun',
    image: 'https://unsplash.com/photos/ijvSNGFPAiI/download?force=true&w=800',
  },
  {
    id: 'makeup-4',
    name: 'Eyebrow Shaping',
    category: 'makeup',
    description: 'Professional eyebrow design and tinting',
    price: 250,
    duration: 30,
    icon: 'eye',
    image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&w=800&h=600&q=80',
  },
  // Skincare Services
  {
    id: 'skin-1',
    name: 'Facial Treatment',
    category: 'skincare',
    description: 'Deep cleansing and rejuvenating facial',
    price: 600,
    duration: 60,
    icon: 'droplet',
    image: 'https://unsplash.com/photos/rWwuf8yKw4Y/download?force=true&w=800',
  },
  {
    id: 'skin-2',
    name: 'Hydration Therapy',
    category: 'skincare',
    description: 'Intensive hydration for glowing skin',
    price: 700,
    duration: 75,
    icon: 'waves',
    image: 'https://unsplash.com/photos/g-m8EDc4X6Q/download?force=true&w=800',
  },
  {
    id: 'skin-3',
    name: 'Microdermabrasion',
    category: 'skincare',
    description: 'Gentle exfoliation for smooth, radiant skin',
    price: 550,
    duration: 45,
    icon: 'zap',
    image: 'https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  // Massage Services
  {
    id: 'massage-1',
    name: 'Swedish Massage',
    category: 'massage',
    description: 'Relaxing full-body massage',
    price: 800,
    duration: 60,
    icon: 'hand',
    image: 'https://unsplash.com/photos/a9pFSC8dTlo/download?force=true&w=800',
  },
  {
    id: 'massage-2',
    name: 'Deep Tissue Massage',
    category: 'massage',
    description: 'Therapeutic massage for muscle tension',
    price: 900,
    duration: 75,
    icon: 'activity',
    image: 'https://unsplash.com/photos/YPyL2lt9eRM/download?force=true&w=800',
  },
  {
    id: 'massage-3',
    name: 'Facial Massage',
    category: 'massage',
    description: 'Relaxing facial and neck massage',
    price: 450,
    duration: 45,
    icon: 'smile',
    image: 'https://unsplash.com/photos/PtOfbGkU3uI/download?force=true&w=800',
  },
]

export const serviceCategories = [
  { id: 'hair', name: '', color: 'rose' }, // Name will be populated from translations
  { id: 'makeup', name: '', color: 'lavender' }, // Name will be populated from translations
  { id: 'skincare', name: '', color: 'blue' }, // Name will be populated from translations
  { id: 'massage', name: '', color: 'green' }, // Name will be populated from translations
]