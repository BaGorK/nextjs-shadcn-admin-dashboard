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

import BackButton from '@/components/BackButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import posts from '@/lib/data/data';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: 'Title must be at least 3 characters long',
    })
    .max(100, {
      message: 'Title must be at most 100 characters long',
    }),
  body: z.string().min(10, {
    message: 'Body must be at least 10 characters long',
  }),
  author: z
    .string()
    .min(3, {
      message: 'Author must be at least 3 characters long',
    })
    .max(50, {
      message: 'Author must be at most 50 characters long',
    }),
  date: z.string().nonempty({
    message: 'Date is required',
  }),
});

type Props = {
  params: {
    id: string;
  };
};

function PostEditPage({ params }: Props) {
  const { toast } = useToast();
  const post = posts.find((post) => post.id === params.id);

  const formMethods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: post,
  });

  const { handleSubmit, control } = formMethods;

  const onSubmitHandler = handleSubmit((data: z.infer<typeof formSchema>) => {
    toast({
      title: 'Post has been updated successfully',
      description: `Updated by ${post?.author} on ${post?.date}`,
    });
  });

  return (
    <>
      <BackButton label='Back To Posts' to='/posts' />

      <h3 className='text-2xl mb-4'>Edit Post</h3>

      <Form {...formMethods}>
        <form onSubmit={onSubmitHandler}>
          <FormField
            control={control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-slate-300/70'>
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className='bg-slate-200 border-0 text-black dark:bg-slate-500/50 dark:text-white focus-visible:ring-0 focus-visible:ring-offset-0'
                    placeholder='enter title'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name='author'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-slate-300/70'>
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    className='bg-slate-200 border-0 text-black dark:bg-slate-500/50 dark:text-white focus-visible:ring-0 focus-visible:ring-offset-0'
                    placeholder='enter author'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name='date'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-slate-300/70'>
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    className='bg-slate-200 border-0 text-black dark:bg-slate-500/50 dark:text-white focus-visible:ring-0 focus-visible:ring-offset-0'
                    placeholder='enter date'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name='body'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-slate-300/70'>
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    className='bg-slate-200 border-0 text-black dark:bg-slate-500/50 dark:text-white focus-visible:ring-0 focus-visible:ring-offset-0'
                    placeholder='enter body'
                    {...field}
                    rows={5}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='w-full bg-blue-600 text-white mt-8'>
            Update Post
          </Button>
        </form>
      </Form>
    </>
  );
}

export default PostEditPage;
