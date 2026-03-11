import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'IOE MSc Prep | Master the Entrance Exam',
  description: 'Structured, affordable, and high-quality preparation for the IOE MSc Entrance Exam.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans text-slate-900 antialiased bg-slate-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
