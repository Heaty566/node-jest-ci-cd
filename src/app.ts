import express from "express";

const app = express();

export const testFunction = () => {
        return "v1.0.1";
};

app.get("/test", (req, res) => {
        console.log("hello");
        return res.send(testFunction());
});

export { app };
