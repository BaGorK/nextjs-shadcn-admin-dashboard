import { ArrowLeftCircle } from 'lucide-react';
import Link from 'next/link';

interface Props {
  label: string;
  to: string;
}

function BackButton({ label, to }: Props) {
  return (
    <Link
      href={to}
      className='flex items-center gap-1 font-bold mb-5 text-gray-500'
    >
      <ArrowLeftCircle size={18} />
      {label}
    </Link>
  );
}

export default BackButton;
