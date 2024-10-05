import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
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
        <div className='flex'>
          <div className='h-screen hidden md:block w-[300px]'>
            <Sidebar />
          </div>
          <div className='p-5 w-full mx-auto max-w-7xl'>{children}</div>
        </div>
      </body>
    </html>
  );
}
