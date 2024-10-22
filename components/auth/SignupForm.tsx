'use client';

import { z } from 'zod';
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

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

const formSchema = z.object({
  username: z.string().trim().min(3, {
    message: 'username must be at least 3 characters long',
  }),
  email: z
    .string()
    .min(3, {
      message: 'email must be at least 3 characters long',
    })
    .email({
      message: 'Please enter a valid email',
    }),
  password: z.string().trim().min(8, {
    message: 'Body must be at least 8 characters long',
  }),
  passwordConfirm: z.string().trim().min(8, {
    message: 'password confirm must be at least 8 characters long',
  }),
});

function SignupForm() {
  const router = useRouter();
  const formMethods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      username: '',
      passwordConfirm: '',
    },
  });

  const { handleSubmit, control } = formMethods;

  const onSubmitHandler = handleSubmit((data: z.infer<typeof formSchema>) => {
    router.push('/');
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Signup</CardTitle>
        <CardDescription>Create an account</CardDescription>
      </CardHeader>

      <CardContent className='space-y-2'>
        <Form {...formMethods}>
          <form onSubmit={onSubmitHandler}>
            <FormField
              control={control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-slate-300/70'>
                    UserName
                  </FormLabel>
                  <FormControl>
                    <Input
                      className='bg-slate-200 border-0 text-black dark:bg-slate-500/50 dark:text-white focus-visible:ring-0 focus-visible:ring-offset-0'
                      placeholder='enter username'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-slate-300/70'>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      className='bg-slate-200 border-0 text-black dark:bg-slate-500/50 dark:text-white focus-visible:ring-0 focus-visible:ring-offset-0'
                      placeholder='enter email'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-slate-300/70'>
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      className='bg-slate-200 border-0 text-black dark:bg-slate-500/50 dark:text-white focus-visible:ring-0 focus-visible:ring-offset-0'
                      placeholder='enter password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name='passwordConfirm'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-slate-300/70'>
                    Password-confirm
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      className='bg-slate-200 border-0 text-black dark:bg-slate-500/50 dark:text-white focus-visible:ring-0 focus-visible:ring-offset-0'
                      placeholder='re-enter password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className='w-full bg-blue-600 hover:bg-blue-600 text-white mt-8'>
              Signup
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default SignupForm;
