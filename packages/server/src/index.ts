import fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { createContext } from "./services";
import { appRouter } from "./router";
import { SERVER_PORT } from "./enums";

const server = fastify({
  maxParamLength: 5000,
});

server.register(cors, {
  credentials: true,
});

server.register(cookie);

server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: { router: appRouter, createContext },
});

const startServer = async () => {
  try {
    await server.listen({ port: SERVER_PORT });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

startServer();

export type AppRouter = typeof appRouter;
