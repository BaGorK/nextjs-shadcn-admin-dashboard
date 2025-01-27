import ThemeToggler from '@/components/ThemeToggler';

export const metadata = {
  title: 'Auth Layout',
  description: 'Generated by Next.js',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='h-screen flex  items-center justify-center relative'>
      {children}
      <div className='absolute right-2 top-2'>
        <ThemeToggler className='bg-slate-200 hover:bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600' />
      </div>
    </div>
  );
}
