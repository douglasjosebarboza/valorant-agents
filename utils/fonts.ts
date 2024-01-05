import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const druk = localFont({
  src: [
    {
      path: '../public/fonts/druk-bold.otf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../public/fonts/druk-medium.otf',
      weight: '500',
      style: 'medium',
    },
  ],
})
