import 'https://deno.land/std@0.173.0/dotenv/load.ts';
import { Application } from "https://deno.land/x/oak/mod.ts";

const PORT = Deno.env.get('PORT') || 8082
const app = new Application()

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});


console.log(`Server running on port ${PORT} `)

await app.listen({ port: +PORT })
