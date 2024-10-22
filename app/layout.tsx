import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

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
          {children}
        </ThemeProvider>

        <Toaster />
      </body>
    </html>
  );
}
