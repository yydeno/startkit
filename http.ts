import { serve } from "https://deno.land/std@v0.40.0/http/server.ts";
import { logger } from "./logger.ts";

const s = serve({ port: 8000 });
logger.info("http://localhost:8000/");
for await (const req of s) {
  console.log(req.headers)
  req.respond({ body: "Hello World\n" });
}
