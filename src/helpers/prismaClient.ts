import "https://deno.land/std@0.173.0/dotenv/load.ts";
import { PrismaClient } from "../deps.ts";


const prisma = new PrismaClient({
	datasources: {
		db: {
			url: "prisma://aws-us-east-1.prisma-data.com/?api_key=jh1Od7b2reIwpdb1XGXaCwykg2GlXGzp9CQn53GnKBnf8T3MmRQys9MnUQ7qXi4Q",
		},
	},
});

export { prisma };
