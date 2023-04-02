import * as dotenv from "dotenv";

dotenv.config();

export const NODE_ENV = String(process.env.NODE_ENV);
export const SERVER_PORT = Number(process.env.PORT);
