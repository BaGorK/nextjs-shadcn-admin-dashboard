import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function AuthTabs() {
  return (
    <Tabs defaultValue='login' className='w-[400px]'>
      <TabsList className='grid grid-cols-2 w-full'>
        <TabsTrigger value='login'>Login</TabsTrigger>
        <TabsTrigger value='signup'>Signup</TabsTrigger>
      </TabsList>
      <TabsContent value='login'>
        <LoginForm />
      </TabsContent>
      <TabsContent value='signup'>
        <SignupForm />
      </TabsContent>
    </Tabs>
  );
}

export default AuthTabs;
