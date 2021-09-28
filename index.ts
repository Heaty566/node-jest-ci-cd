import path from "path";
import dotenv from "dotenv";
import express from "express";

dotenv.config({
        path: path.resolve(__dirname, `./config/.env.${process.env.NODE_ENV}`),
});

const app = express();

app.get("/test", function () {
        return "ok";
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
        console.log(`Listening on port ${port}`);
});
