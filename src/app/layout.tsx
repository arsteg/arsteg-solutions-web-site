// src/app/layout.tsx
import type { Metadata } from 'next';
// src/app/layout.tsx  (unchanged)
import './globals.css';   // Tailwind + your original globals
import './app.css';       // <-- add this line
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrackVisit from '@/components/TrackVisit';

export const metadata: Metadata = {
  title: 'Arsteg - Software Solutions',
  description: 'Innovative software solutions by Arsteg',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <TrackVisit />
        <Navbar />
        <main className="flex-grow container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}