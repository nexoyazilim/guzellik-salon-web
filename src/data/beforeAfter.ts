export interface BeforeAfterItem {
  id: string
  title: string
  category: 'hair' | 'makeup' | 'skincare'
  before: string
  after: string
  description: string
}

export const beforeAfterGallery: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    title: '', // Will be populated from translations
    category: 'hair',
    before: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    after: 'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description: '', // Will be populated from translations
  },
  {
    id: 'ba-2',
    title: '', // Will be populated from translations
    category: 'makeup',
    before: 'https://images.pexels.com/photos/3807515/pexels-photo-3807515.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    after: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description: '', // Will be populated from translations
  },
  {
    id: 'ba-3',
    title: '', // Will be populated from translations
    category: 'skincare',
    before: 'https://images.pexels.com/photos/2897506/pexels-photo-2897506.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    after: 'https://images.pexels.com/photos/2897507/pexels-photo-2897507.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description: '', // Will be populated from translations
  },
  {
    id: 'ba-4',
    title: '', // Will be populated from translations
    category: 'hair',
    before: 'https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    after: 'https://images.pexels.com/photos/3962288/pexels-photo-3962288.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description: '', // Will be populated from translations
  },
  {
    id: 'ba-5',
    title: '', // Will be populated from translations
    category: 'makeup',
    before: 'https://images.pexels.com/photos/2897506/pexels-photo-2897506.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    after: 'https://images.pexels.com/photos/2897507/pexels-photo-2897507.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description: '', // Will be populated from translations
  },
  {
    id: 'ba-6',
    title: '', // Will be populated from translations
    category: 'skincare',
    before: 'https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    after: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description: '', // Will be populated from translations
  },
]