import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import posts from '@/lib/data/data';
import Link from 'next/link';

interface Props {
  limit?: number;
  title?: string;
}

function PostsTable({ title, limit }: Props) {
  // Sort posts in dec order based on date
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // filtered posts based on limit
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <div className='mt-10'>
      <h3 className='text-2xl mb-4 font-semibold'>
        {title ? title : 'All Posts'}
      </h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className='hidden md:table-cell'>Author</TableHead>
            <TableHead className='hidden md:table-cell text-right'>
              Date
            </TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell className='hidden md:table-cell'>
                {post.author}
              </TableCell>
              <TableCell className='hidden md:table-cell text-right'>
                {post.date}
              </TableCell>
              <TableCell>
                <Link
                  href={`/posts/edit/${post.id}`}
                  className='bg-blue-500 hover:bg-blue-700 text-xs font-bold transition rounded text-white px-3 py-1'
                >
                  Edit
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default PostsTable;