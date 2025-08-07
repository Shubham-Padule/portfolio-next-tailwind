import './globals.css';
import Navbar from './components/Navbar'; // Add this
import Footer from './components/Footer'; // already there

export default function RootLayout({ children }) {
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
