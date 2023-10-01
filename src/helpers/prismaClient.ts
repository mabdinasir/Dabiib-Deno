import "https://deno.land/std@0.173.0/dotenv/load.ts";
import { PrismaClient } from "../deps.ts";

const DATABASE_URL = Deno.env.get("DATABASE_URL") as string;

const prisma = new PrismaClient({
	datasources: {
		db: {
			url: DATABASE_URL,
		},
	},
});

export { prisma };
