import type { Metadata } from 'next';
import    './globals.css';
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
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}