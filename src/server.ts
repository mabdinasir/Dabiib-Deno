import "https://deno.land/std@0.173.0/dotenv/load.ts";
import { Application } from "./deps.ts";
import router from "./routes/index.ts";

const PORT = Deno.env.get("PORT") || 8082;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods())

console.log(`Server running on port ${PORT} `);

await app.listen({ port: +PORT });
