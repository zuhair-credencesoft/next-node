import express, { Request, Response } from "express";
const app = express();

app.get("/hello", async (req: Request, res: Response) => {
  return res.status(200).json({ message: "hello world." });
});

const port = 3000;

app.listen(port, () => console.log(`Server started at port ${port}`));