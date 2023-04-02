import { createRouter } from "../services";
import { helloWorldRouter } from "./helloWorld";

export const appRouter = createRouter({
  helloWorld: helloWorldRouter,
});
