import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import BackButton from '@/components/BackButton';

function page() {
  return (
    <>
      <BackButton label='Back To Posts' to='/posts' />
    </>
  );
}

export default page;
