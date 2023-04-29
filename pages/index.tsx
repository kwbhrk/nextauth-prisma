import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import type { CustomNextPage } from '../types/custom-next-page';
import Link from 'next/link';

const Home: CustomNextPage = () => {
  const { data, status } = useSession();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {data?.user?.name || <Link href="/auth/signin">SignIn</Link>}
        {status === 'authenticated' && (
          <button className="ml-5" onClick={() => signOut()}></button>
        )}
        <Link href="/secret">SecretPage</Link>
      </main>
    </>
  );
};

export default Home;
