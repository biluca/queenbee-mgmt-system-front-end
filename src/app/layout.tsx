
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
      <body className="RootLayout">{children}</body>
    </html>
  )
}
