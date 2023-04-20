import { type NextPage } from "next";
import Head from "next/head";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();
  const { data } = api.recipes.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Brew</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#5E81AC] to-[#8FBCBB]">
        <div>
          {data?.map((recipe) => (
            <div key={recipe.id}>
              <h2 className="text-center text-3xl font-bold text-gray-900">
                {recipe.title}
              </h2>
              <pre className="whitespace-pre-wrap rounded-lg bg-gray-200 p-4 text-black">
                {JSON.stringify(recipe.content)}
              </pre>
            </div>
          ))}
        </div>

        <div className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          {user.isSignedIn ? <SignOutButton /> : <SignInButton />}
        </div>
      </main>
    </>
  );
};

export default Home;
