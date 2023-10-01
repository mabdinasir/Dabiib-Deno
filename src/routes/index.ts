import { addHospitals } from "../controllers/apis/doctors/AddHospitals.ts";
import { getHospitals } from "../controllers/apis/doctors/getHospitals.ts";
import { Router } from "../deps.ts";

const router = new Router();

router
	.get("/api/hospitals", getHospitals)
	.post("/api/hospitals", addHospitals);

export default router;
