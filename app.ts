import express, { Request, Response } from "express";
import cors from "cors";
import paymentRouter from "./src/payment/infraestructure/payment.router";

const app = express();
const PORT = process.env.PORT || "8000";

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());

app.use("/pago", paymentRouter)
app.use("*", (req : Request, res : Response) => {
  res.status(404).send("not found")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
