import { Toaster } from 'react-hot-toast'
import './style.scss'

export const metadata = {
  title: 'Bee.M - Public'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="RootLayout">
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  )
}
