import clerkClient from "@clerk/clerk-sdk-node";
import { z } from "zod";
import type { User } from "@clerk/nextjs/dist/api";
import type { Recipe } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    profileImageUrl: user.profileImageUrl,
  };
};

const addUserDataToRecipes = async (recipes: Recipe[]) => {
  const userId = recipes.map((recipe) => recipe.authorId);
  const users = (
    await clerkClient.users.getUserList({
      userId: userId,
      limit: 100,
    })
  ).map(filterUserForClient);

  return recipes.map((recipe) => {
    const author = users.find((user) => user.id === recipe.authorId);

    if (!author) {
      console.error("AUTHOR NOT FOUND", recipe);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `Author for recipe not found. RECIPE ID: ${recipe.id}, USER ID: ${recipe.authorId}`,
      });
    }
    if (!author.username) {
      author.username = "Brew! User";
    }
    return {
      recipe,
      author: {
        ...author,
        username: author.username ?? "Unknown Brew! User",
      },
    };
  });
};

export const recipesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const recipes = await ctx.prisma.recipe.findMany({
      take: 10,
      orderBy: { createdAt: "desc" },
    });

    return addUserDataToRecipes(recipes);
  }),
});
