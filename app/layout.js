export const metadata = {
  title: 'In Profectum',
  description: 'A collection of innovative projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ 
        margin: 0,
        padding: 0,
        backgroundColor: '#0f0f0f',
        minHeight: '100vh',
        overflowX: 'hidden'
      }}>
        {children}
      </body>
    </html>
  )
}