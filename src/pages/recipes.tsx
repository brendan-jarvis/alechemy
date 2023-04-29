import { type NextPage } from "next";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { RecipeView } from "~/components/RecipeView";

import { api } from "~/utils/api";
import { LoadingSpinner } from "~/components/Loading";

const Recipes: NextPage = () => {
  const { data, isLoading } = api.recipes.getAll.useQuery();

  const Header = () => (
    <h1 className="m-4 text-center font-serif text-5xl font-bold text-neutral">
      Latest recipes
    </h1>
  );

  if (isLoading || true)
    return (
      <>
        <Nav />
        <Header />
        <LoadingSpinner size={60} />
        <Footer />
      </>
    );

  if (!data)
    return (
      <>
        <Nav />
        <Header />
        <div className="bg-red-100 p-4 text-error">Something went wrong!</div>
        <Footer />
      </>
    );

  return (
    <>
      <Nav />

      <Header />
      <div className="flex flex-row flex-wrap justify-center gap-4 p-4">
        {data?.map((props) => (
          <RecipeView key={props.recipe.id} {...props} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Recipes;
