import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use("/", express.static("../client/public"));
app.use("/js", express.static("../client/dist"));

app.get("/*", async (req, res) => {
    res.sendFile(path.resolve("../client/public/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});