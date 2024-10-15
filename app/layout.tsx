import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
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
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={false}
          disableTransitionOnChange
          storageKey='next-dashboard-theme'
        >
          <Navbar />
          <div className='flex'>
            <div className='min-h-screen hidden md:block w-[300px]'>
              <Sidebar />
            </div>
            <div className='p-5 w-full'>{children}</div>
          </div>
        </ThemeProvider>

        <Toaster />
      </body>
    </html>
  );
}
