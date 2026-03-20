import type { Metadata } from 'next';
import { Poppins, Space_Mono } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
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

//# SUBBLOCK1: Metadata Configuration
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
        {/* SUBBLOCK2: Viewport and Font Configuration */}
        {/* SUBBLOCK2: Theme Initialization Script */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {}
            `,
          }}
        />
      {/* SUBBLOCK2: Body with Theme Provider */}
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
