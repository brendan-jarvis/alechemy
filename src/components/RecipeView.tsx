import type { BeerJSON } from "~/utils/types";
import Image from "next/image";
import { RouterOutputs } from "~/utils/api";

type RecipeWithUser = RouterOutputs["recipes"]["getAll"][number];

export const RecipeView = (props: RecipeWithUser) => {
  const { recipe, author } = props;

  const beerjson: BeerJSON = recipe.content?.beerjson;

  if (!beerjson) return null;

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
              : "/images/jon-parry-C8eSYwQkwHw-unsplash.jpg"
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
            {beerjson?.recipes[0]?.style.name.toUpperCase()}
          </div>
          <div className="badge-outline badge text-sm text-success">
            {beerjson?.recipes[0]?.type.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};
