import { AppRouter } from "@alcmaeon/server";
import { createTRPCReact } from "@trpc/react-query";

export const tRPC = createTRPCReact<AppRouter>();
