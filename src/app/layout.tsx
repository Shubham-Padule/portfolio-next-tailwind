import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ReactNode } from 'react'; // ✅ Add this

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
