import express from "express"
import cors from "cors"
import profileRouter from "./router/profile.js"
import { connectDB } from "./config/db.js"

const PORT = 8080
const app = express()
connectDB();
app.use(cors())
app.use(express.json())


app.use("/api/profile", profileRouter)

app.listen(PORT, () => {
  console.log(`App is Running on Server: ${PORT}`);
})
