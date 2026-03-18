import type { Metadata } from 'next';
import { Poppins, Space_Mono } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Diego | AI Consultant & Engineer',
  description: 'Luxury tech portfolio showcasing AI consulting, NLP development, game design, and cybersecurity expertise.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23D4AF37" width="100" height="100"/><circle fill="%23050505" cx="50" cy="50" r="30"/></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${spaceMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-obsidian-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
