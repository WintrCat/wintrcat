import { Router } from "express";
import { getStatistics } from "../lib/statistics";

const router = Router();

router.get("/api/statistics", async (req, res) => {

    res.send(await getStatistics());

});

export default router;