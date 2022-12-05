import { useSession } from 'next-auth/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <main>
      <h1 style={{ color: 'white' }}>Logged In as {session?.user?.name}</h1>
    </main>
  );
};

export default Home;
