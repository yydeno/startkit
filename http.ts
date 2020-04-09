import { serve } from "https://deno.land/std@v0.40.0/http/server.ts";
import { blue, green, red, yellow } from "https://deno.land/std/fmt/colors.ts";
//import { logger } from "./logger.ts";

const s = serve({ port: 8000 });
console.log(green("http://localhost:8000/"));
for await (const req of s) {
  console.log(yellow(req.url));
  req.respond({ body: "Hello World " + Date.now() });
}
