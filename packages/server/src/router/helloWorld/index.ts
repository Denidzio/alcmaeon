import { getHelloWorldText } from "../../controllers";
import { createRouter } from "../../services";

export const helloWorldRouter = createRouter({
  getHelloWorldText,
});
