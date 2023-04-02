import { initTRPC, inferAsyncReturnType, TRPCError } from "@trpc/server";
import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";

const t = initTRPC
  .context<inferAsyncReturnType<typeof createContext>>()
  .create();

export const createContext = ({ req, res }: CreateFastifyContextOptions) => {
  return { req, res };
};

export const {
  middleware,
  router: createRouter,
  procedure: publicProcedure,
} = t;
