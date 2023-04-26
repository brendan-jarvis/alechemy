// import type { BeerJSON } from "~/utils/types";
import Image from "next/image";
import Link from "next/link";
import type { RouterOutputs } from "~/utils/api";

type RecipeWithUser = RouterOutputs["recipes"]["getAll"][number];

export const RecipeView = (props: RecipeWithUser) => {
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
        <div className="card-title">
          <Image
            className="h-14 w-14 rounded-full"
            src={author.profileImageUrl}
            alt="Profile Image"
            width={50}
            height={50}
          />
          {author.username && (
            <p className="text-sm">
              Added by{" "}
              {author.username !== "Alechemist" ? (
                <Link href={`/${author.username}`}>@{author.username}</Link>
              ) : (
                author.username
              )}
            </p>
          )}
        </div>
        <div>
          <p>{recipe.description}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="badge-outline badge text-sm text-info">
            {/* {recipe.content?.beerjson.recipes[0]?.style.name.toUpperCase()} */}
            Style
          </div>
          <div className="badge-outline badge text-sm text-success">
            {/* {recipe.content?.beerjson.recipes[0]?.type.toUpperCase()} */}
            Type
          </div>
        </div>
      </div>
    </div>
  );
};
