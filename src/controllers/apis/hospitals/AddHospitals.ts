import { Context } from "../../../deps.ts";
import { prisma } from "../../../helpers/prismaClient.ts";
import { Hospital } from "../../../models/hospital.ts";

const addHospitals = async (ctx: Context) => {
	const body = ctx.request.body();
	const hospitals: Hospital[] = await body.value;

	try {
		if (!hospitals) {
			ctx.response.status = 400;
			ctx.response.body = {
				success: false,
				message: "Body is missing!",
			};
			return;
		}

		// Check for duplicate hospital names
		const duplicateHospitals = await Promise.all(
			hospitals.map(async (userValue: Hospital) => {
				const hospital = await prisma.hospital.findFirst({
					where: {
						name: userValue.name,
					},
				});
				return hospital ? 1 : 0;
			}),
		);

		if (duplicateHospitals.some((count) => count > 0)) {
			ctx.response.status = 400;
			ctx.response.body = {
				success: false,
				message:
					"Hospital(s) with the same name(s) already exist(s). Please provide unique Hospital name(s)!",
			};
			return;
		}

		// Create hospitals, doctors, and schedules
		const createdHospitals = await Promise.all(
			hospitals.map(async (userValue) => {
				const createdHospital = await prisma.hospital.create({
					data: {
						name: userValue.name,
					},
				});
				return createdHospital;
			}),
		);

		ctx.response.status = 201;
		ctx.response.body = {
			success: true,
			message: "Hospital(s) created successfully!",
			count: createdHospitals.length,
			hospitals: createdHospitals,
		};
	} catch (error) {
		ctx.response.status = 500;
		ctx.response.body = {
			success: false,
			message: error.toString(),
		};
	} finally {
		await prisma.$disconnect();
	}
};

export { addHospitals };
