import { Hospital } from "./hospital.ts";
import { Schedule } from "./schedule.ts";

export interface Doctor {
	id: string;
	name: string;
	hospitals: Hospital[];
	schedules: Schedule[];
}
