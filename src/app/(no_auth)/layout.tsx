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
      <body className="RootLayout">{children}</body>
    </html>
  )
}
