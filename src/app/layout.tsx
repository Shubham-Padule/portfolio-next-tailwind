import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react'; // ✅ Use react version (unless you're in `middleware` or server)

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
