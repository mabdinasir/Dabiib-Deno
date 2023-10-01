import { Doctor } from "./doctor.ts";
import { Hospital } from "./hospital.ts";

export interface Schedule {
	id: string;
	startTime: Date;
	endTime: Date;
	doctor: Doctor;
	hospital: Hospital;
}
