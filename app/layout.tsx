import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Ultimate Polish Christmas Expedition | Zakopane Trip Planner',
  description: 'Plan your epic road trip from Utrecht to Zakopane. Complete checklist, interactive timeline, and route visualization.',
  keywords: 'Zakopane, Poland, Christmas, road trip, travel planner, snowboarding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}

