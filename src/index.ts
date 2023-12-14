import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

import videoRouter from "./routes/video";

const app = express();

app.use("/static",
    express.static("src/public"),
    express.static("src/media"),
    express.static("dist/public")
);

app.use(videoRouter);

app.get("/", (req, res) => {
    res.sendFile(path.resolve("src/public/home/index.html"));
});

app.get("/course", (req, res) => {
    res.sendFile(path.resolve("src/public/course/index.html"));
});

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});