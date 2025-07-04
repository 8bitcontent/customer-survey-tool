import './globals.css'

export const metadata = {
  title: 'Customer Discovery Survey Creator',
  description: 'Generate targeted questions to better understand your ideal customer profile, pain points, and motivations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}