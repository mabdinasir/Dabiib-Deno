import { Doctor } from "./doctor.ts";
import { Schedule } from "./schedule.ts";

export interface Hospital {
	id: string;
	name: string;
	doctors: Doctor[];
	schedules: Schedule[];
}
