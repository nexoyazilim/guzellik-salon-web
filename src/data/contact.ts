export interface ContactInfo {
  address: string
  city: string
  zipCode: string
  phone: string
  email: string
  website: string
  latitude: number
  longitude: number
}

export interface WorkingHours {
  day: string
  open: string
  close: string
  closed: boolean
}

export const contactInfo: ContactInfo = {
  address: 'Atatürk Caddesi, Güzellik Salonu Sokak No: 42',
  city: 'Istanbul, Turkey',
  zipCode: '34340',
  phone: '+90 212 XXX XXXX',
  email: 'info@guzelliksalonu.com',
  website: 'www.guzelliksalonu.com',
  latitude: 41.0082,
  longitude: 28.9784,
}

export const workingHours: WorkingHours[] = [
  { day: 'Monday', open: '09:00', close: '19:00', closed: false },
  { day: 'Tuesday', open: '09:00', close: '19:00', closed: false },
  { day: 'Wednesday', open: '09:00', close: '19:00', closed: false },
  { day: 'Thursday', open: '09:00', close: '21:00', closed: false },
  { day: 'Friday', open: '09:00', close: '21:00', closed: false },
  { day: 'Saturday', open: '10:00', close: '20:00', closed: false },
  { day: 'Sunday', open: '00:00', close: '00:00', closed: true },
]