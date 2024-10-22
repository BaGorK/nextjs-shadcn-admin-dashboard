import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'Next.js shadcn-ui',
  description: 'Admin dashboard built using Next.js and shadcn-ui',
};

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='min-h-screen hidden md:block w-[300px]'>
          <Sidebar />
        </div>
        <div className='p-5 w-full'>{children}</div>
      </div>
    </>
  );
}
