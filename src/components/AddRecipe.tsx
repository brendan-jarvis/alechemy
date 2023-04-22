import { useUser } from "@clerk/nextjs";
import { useRef } from "react";

export const AddRecipe = () => {
  const { user } = useUser();

  if (!user) return null;

  const authorID = user.id;

  return (
    <div className="card bg-neutral text-base-200 shadow-xl hover:bg-neutral-focus">
      <div className="card-body">
        <h2 className="card-title text-accent-content">Add a recipe</h2>
        <h3 className="card-subtitle">Recipe Title</h3>
        <input
          type="text"
          placeholder="e.g. 'Superdelic Hazy IPA'"
          className="input w-full max-w-xs text-base text-neutral"
        />
        <h3 className="card-subtitle">Recipe Description</h3>
        <input
          type="text"
          placeholder="e.g. 'Tropical, ripe mango, and sweet berries'"
          className="input w-full max-w-xs text-base text-neutral"
        />
        <h3 className="card-subtitle">BeerJSON Recipe</h3>
        <textarea
          className="textarea-bordered textarea w-full text-base text-neutral"
          placeholder="BeerJSON recipe"
        ></textarea>
        <button className="btn-primary btn font-bold text-neutral hover:btn-success">
          Submit
        </button>
      </div>
    </div>
  );
};
