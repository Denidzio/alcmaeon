import { helloWorldText } from "@alcmaeon/shared";
import { publicProcedure } from "../../services";

export const getHelloWorldText = publicProcedure.query(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return helloWorldText;
});
