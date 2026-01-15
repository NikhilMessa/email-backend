import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import teamRoutes from "./routes/team.js";

dotenv.config();

const app = express();

// =====================
// MIDDLEWARES
// =====================
app.use(cors());
app.use(express.json());

// =====================
// ROUTES
// =====================
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// 👉 REGISTER TEAM ROUTES HERE
app.use("/api/team", teamRoutes);

// =====================
// SERVER START
// =====================
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
