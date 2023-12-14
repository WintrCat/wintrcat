import { Router } from "express";

const router = Router();

router.get("/api/video", (req, res) => {

    res.send(process.env.VIDEO_URL || "");

});

export default router;