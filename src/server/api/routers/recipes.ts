import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const recipesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const recipes = await ctx.prisma.recipe.findMany({
      take: 10,
      orderBy: { createdAt: "desc" },
    });

    return recipes;
  }),
});
