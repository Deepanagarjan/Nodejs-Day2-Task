import express from "express";
import AppRoutes from "./src/Routes/Booking.js";

let PORT = 4000;
let app = express();

app.use(express.json());
app.use("/", AppRoutes);

app.listen(PORT, () => console.log(`App is listening to ${PORT}`));