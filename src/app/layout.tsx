import "./style.css"

export const metadata = {
  title: 'QueenBee'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="RootLayout">{children}</body>
    </html>
  )
}
