import Link from 'next/link';
import avatar from '@/images/avatar.jpg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function Navbar() {
  return (
    <div className='bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between'>
      <Link href='/' className='text-4xl tracking-wider'>
        ED
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className='focus:outline-none'>
          <Avatar>
            <AvatarImage src={avatar.src} alt='avatar' />
            <AvatarFallback className='text-black text-2xl'>E</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <Link href='/'>My Account</Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href='/'>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href='/'>Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href='/'>Subscription</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href='/'>Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Navbar;
