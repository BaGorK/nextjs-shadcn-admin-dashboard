import Link from 'next/link';

function Navbar() {
  return (
    <div className='bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between'>
      <Link href='/' className='text-4xl tracking-wider'>
        ED
      </Link>
      <div className='h-12 w-12 flex items-center justify-center text-2xl tracking-tighter rounded-full bg-white text-slate-500'>
        AVT
      </div>
    </div>
  );
}

export default Navbar;
