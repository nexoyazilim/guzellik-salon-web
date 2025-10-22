export interface StaffMember {
  id: string
  name: string
  title: string
  specialties: string[]
  image: string
  bio: string
}

export const staff: StaffMember[] = [
  {
    id: 'staff-1',
    name: 'Ayşe Yılmaz',
    title: 'Hair Specialist',
    specialties: ['Hair Coloring', 'Balayage', 'Keratin Treatment', 'Haircut & Styling'],
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'With 8 years of experience in hair design, Ayşe specializes in creative color work and transformative haircuts.',
  },
  {
    id: 'staff-2',
    name: 'Zeynep Demir',
    title: 'Makeup Artist',
    specialties: ['Bridal Makeup', 'Party Makeup', 'Eyebrow Shaping'],
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Expert makeup artist with a passion for enhancing natural beauty. Specializes in bridal and event makeup.',
  },
  {
    id: 'staff-3',
    name: 'Leyla Kaya',
    title: 'Skin Care Specialist',
    specialties: ['Facial Treatment', 'Hydration Therapy', 'Microdermabrasion'],
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Certified skincare specialist dedicated to revealing your skin\'s natural radiance with premium treatments.',
  },
  {
    id: 'staff-4',
    name: 'Fatma Erdoğan',
    title: 'Massage Therapist',
    specialties: ['Swedish Massage', 'Deep Tissue Massage', 'Facial Massage'],
    image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Holistic massage therapist helping clients relax and rejuvenate with therapeutic techniques.',
  },
]

// Mock availability data
export const getAvailableSlots = (_staffId: string, _date: string): string[] => {
  const slots = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
  ]
  // Mock: randomly mark some as unavailable
  return slots.filter(() => Math.random() > 0.3)
}