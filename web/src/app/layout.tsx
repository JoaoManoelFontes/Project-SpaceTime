import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import { Profile } from '@/components/Profile'
import { SingIn } from '@/components/SingIn'
import { Hero } from '@/components/Hero'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-jamjuree',
})

export const metadata = {
  title: 'NLW - SpaceTime',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAutenticated = cookies().has('token')

  return (
    <html lang="pt">
      <body
        className={`${roboto.variable}  ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-200`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/* Left section */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/25 px-20 py-16">
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
            {/* Stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-3 bg-stripes" />
            {isAutenticated ? <Profile /> : <SingIn />}
            <Hero />
          </div>
          {/* Right section */}
          <div className="flex max-h-screen flex-col overflow-y-scroll  bg-[url(../assets/bg-stars.svg)] bg-cover ">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
