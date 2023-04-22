import { type NextPage } from "next";
import Head from "next/head";
import { SignInButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { AddRecipe } from "~/components/AddRecipe";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();
  const { data, isLoading } = api.recipes.getAll.useQuery();

  if (isLoading)
    return <div className="bg-blue-100 p-4 text-blue-500">Loading...</div>;

  if (!data)
    return (
      <div className="bg-red-100 p-4 text-red-500">Something went wrong!</div>
    );

  return (
    <>
      <Head>
        <title>Brew</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {user.isSignedIn ? (
        <>
          <Nav />
          <div className="max-w-md">
            <h1 className="m-4 text-center font-serif text-5xl font-bold text-neutral">
              Latest recipes
            </h1>

            <AddRecipe />

            {data?.map((props) => {
              const { recipe, author } = props;

              return (
                <div
                  key={recipe.id}
                  className="card bg-neutral text-base-200 shadow-xl hover:bg-neutral-focus"
                >
                  <figure>
                    <Image
                      src={
                        recipe.image
                          ? recipe.image
                          : [
                              "/images/markus-spiske-qn5iDwvOZgo-unsplash.jpg",
                              "/images/lutz-wernitz-pcW5bR7gSJ4-unsplash.jpg",
                              "/images/meritt-thomas-OGTEP0LyYNk-unsplash.jpg",
                            ][Math.floor(Math.random() * 3)]
                      }
                      className={recipe.image ? "" : "opacity-50"}
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
                    <p className="text-sm italic">By {author?.username}</p>
                    <p>{recipe.description}</p>
                    <div className="card-actions justify-end">
                      <div className="badge-outline badge text-sm text-info">
                        {recipe.content.beerjson.recipes[0].style.name.toUpperCase()}
                      </div>
                      <div className="badge-outline badge text-sm text-success">
                        {recipe.content.beerjson.recipes[0].type.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Footer />
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
              <div className="btn-primary btn rounded bg-primary font-bold text-neutral hover:btn-success">
                <SignInButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
