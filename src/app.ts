import express from "express";

const app = express();

export const testFunction = () => {
        return "v1.0.2";
};

app.get("/test", (req, res) => {
        return res.send(testFunction());
});

export { app };
