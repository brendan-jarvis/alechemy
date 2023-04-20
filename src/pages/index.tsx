import { type NextPage } from "next";
import Head from "next/head";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

import { api } from "~/utils/api";
import { detectContentType } from "next/dist/server/image-optimizer";

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

      {user.isSignedIn ? (
        <>
          <SignOutButton className="btn-secondary btn" />
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("/images/claude-piche-EHbtjmz7hvw-unsplash.jpg")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Brew!</h1>
                {data?.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="card w-96 bg-neutral-focus shadow-xl"
                  >
                    <figure>
                      <Image
                        src={
                          recipe.image
                            ? recipe.image
                            : "/images/lutz-wernitz-pcW5bR7gSJ4-unsplash.jpg"
                        }
                        width={500}
                        height={500}
                        alt={`${recipe.title} ${recipe.description}`}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {recipe.title}
                        <div className="badge-secondary badge">NEW</div>
                      </h2>
                      <p>{recipe.description}</p>
                      <div className="card-actions justify-end">
                        <div className="badge-outline badge text-info">
                          {recipe.content.beerjson.recipes[0].style.name.toUpperCase()}
                        </div>
                        <div className="badge-outline badge text-success">
                          {recipe.content.beerjson.recipes[0].type.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("/images/claude-piche-EHbtjmz7hvw-unsplash.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Brew!</h1>
              <SignInButton className="btn-primary btn" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
