import { type NextPage } from "next";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { RecipeView } from "~/components/RecipeView";

import { api } from "~/utils/api";

const Recipes: NextPage = () => {
  const { data, isLoading } = api.recipes.getAll.useQuery();

  if (isLoading)
    return (
      <div className="bg-blue-100 p-4 text-secondary-focus">Loading...</div>
    );

  if (!data)
    return (
      <div className="bg-red-100 p-4 text-error">Something went wrong!</div>
    );

  return (
    <>
      <Nav />

      <div className="max-w-md">
        <h1 className="m-4 text-center font-serif text-5xl font-bold text-neutral">
          Latest recipes
        </h1>

        {data?.map((props) => (
          <RecipeView key={props.recipe.id} {...props} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Recipes;
