import { Router } from "express";
import { getLatestVideo } from "../lib/statistics";

const router = Router();

router.get("/api/statistics/latest", async (req, res) => {

    console.log(await getLatestVideo());

});

export default router;