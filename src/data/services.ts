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
    image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 'hair-2',
    name: 'Hair Coloring',
    category: 'hair',
    description: 'Full or partial hair coloring with premium products',
    price: 750,
    duration: 90,
    icon: 'palette',
    image: 'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 'hair-3',
    name: 'Keratin Treatment',
    category: 'hair',
    description: 'Smoothing and nourishing treatment for silky hair',
    price: 950,
    duration: 120,
    icon: 'sparkles',
    image: 'https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 'hair-4',
    name: 'Balayage Highlights',
    category: 'hair',
    description: 'Hand-painted highlights for natural-looking dimension',
    price: 850,
    duration: 110,
    icon: 'highlighter',
    image: 'https://images.pexels.com/photos/3962288/pexels-photo-3962288.jpeg?auto=compress&cs=tinysrgb&w=500',
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
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 'makeup-2',
    name: 'Party Makeup',
    category: 'makeup',
    description: 'Bold and glamorous makeup for events',
    price: 600,
    duration: 60,
    icon: 'star',
    image: 'https://images.pexels.com/photos/2897507/pexels-photo-2897507.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 'makeup-3',
    name: 'Natural Makeup',
    category: 'makeup',
    description: 'Fresh, natural-looking makeup for everyday',
    price: 400,
    duration: 45,
    icon: 'sun',
    image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 'makeup-4',
    name: 'Eyebrow Shaping',
    category: 'makeup',
    description: 'Professional eyebrow design and tinting',
    price: 250,
    duration: 30,
    icon: 'eye',
    image: 'https://images.pexels.com/photos/2897507/pexels-photo-2897507.jpeg?auto=compress&cs=tinysrgb&w=500',
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
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 'skin-2',
    name: 'Hydration Therapy',
    category: 'skincare',
    description: 'Intensive hydration for glowing skin',
    price: 700,
    duration: 75,
    icon: 'waves',
    image: 'https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 'skin-3',
    name: 'Microdermabrasion',
    category: 'skincare',
    description: 'Gentle exfoliation for smooth, radiant skin',
    price: 550,
    duration: 45,
    icon: 'zap',
    image: 'https://images.pexels.com/photos/3962288/pexels-photo-3962288.jpeg?auto=compress&cs=tinysrgb&w=500',
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
    image: 'https://images.pexels.com/photos/3807515/pexels-photo-3807515.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 'massage-2',
    name: 'Deep Tissue Massage',
    category: 'massage',
    description: 'Therapeutic massage for muscle tension',
    price: 900,
    duration: 75,
    icon: 'activity',
    image: 'https://images.pexels.com/photos/3962289/pexels-photo-3962289.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 'massage-3',
    name: 'Facial Massage',
    category: 'massage',
    description: 'Relaxing facial and neck massage',
    price: 450,
    duration: 45,
    icon: 'smile',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
]

export const serviceCategories = [
  { id: 'hair', name: 'Hair', color: 'rose' },
  { id: 'makeup', name: 'Makeup', color: 'lavender' },
  { id: 'skincare', name: 'Skincare', color: 'blue' },
  { id: 'massage', name: 'Massage', color: 'green' },
]