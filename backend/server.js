import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/api/auth", authRoutes)

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})

//kZZxrPtwSj1eNc47