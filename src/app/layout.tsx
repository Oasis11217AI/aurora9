import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AURORA9 - AI-Powered Autonomy for Amazon Sellers',
  description: 'Revolutionize your Amazon business with intelligent, autonomous AI agents.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
