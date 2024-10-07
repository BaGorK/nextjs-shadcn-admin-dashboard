import PostsTable from '@/components/posts/PostsTable';
import BackButton from '@/components/BackButton';
import PostsPagination from '@/components/posts/PostsPagination';

function PostsPage() {
  return (
    <>
      <BackButton label='Go Back' to='/' />
      <PostsTable />
      <PostsPagination />
    </>
  );
}

export default PostsPage;
