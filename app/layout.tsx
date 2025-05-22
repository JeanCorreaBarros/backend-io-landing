import type React from "react"

export const metadata = {
  generator: 'v0.dev'
};

import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
