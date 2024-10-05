import './globals.css';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Next.js shadcn-ui',
  description: 'Admin dashboard built using Next.js and shadcn-ui',
};

const inter = Inter({ subsets: ['latin'] });

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
