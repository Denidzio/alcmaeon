import { PrismaClient } from "@prisma/client";
import { NODE_ENV } from "../../enums";

type NodeJSGlobalThis = typeof globalThis;

interface CustomNodeJsGlobal extends NodeJSGlobalThis {
  prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient();

if (NODE_ENV === "development") {
  global.prisma = prisma;
}

export { prisma };
