import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "9mnom384gt",
  apiKey: process.env.API_KEY || "",
});
