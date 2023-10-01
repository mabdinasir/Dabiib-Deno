import { Context } from "../../../deps.ts";
import { prisma } from "../../../helpers/prismaClient.ts";

const getHospitals = async (ctx: Context) => {
	try {
		const hospitals = await prisma.hospital.findMany();
		if (hospitals.length > 0) {
			ctx.response.status = 200;
			ctx.response.body = {
				success: true,
				count: hospitals.length,
				hospitals,
			};
		} else {
			ctx.response.body = {
				success: true,
				hospitals: [],
			};
		}
	} catch (err) {
		ctx.response.status = 500;
		ctx.response.body = {
			success: false,
			msg: err.toString(),
		};
	} finally {
		await prisma.$disconnect();
	}
};

export { getHospitals };
