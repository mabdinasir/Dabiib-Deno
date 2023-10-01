import "https://deno.land/std@0.173.0/dotenv/load.ts";
import { Application, oakCors } from "./deps.ts";
import router from "./routes/index.ts";

const PORT = Deno.env.get("PORT") || 8082;

const app = new Application();
app.use(
	oakCors({
		// credentials: true,
		origin: "*",
		optionsSuccessStatus: 200,
	}),
);

app.use(router.routes());

console.log(`Server running on port ${PORT} `);

await app.listen({ port: +PORT });
