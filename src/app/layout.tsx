import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'Bee.M'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Toaster position="top-center"
        reverseOrder={false} />
      <body className="RootLayout">{children}</body>
    </html>
  )
}
