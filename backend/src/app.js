import express from "express";
import cors from "cors";
import eventRoutes from "./routes/event-routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Health-check endpoint (Öğrenci No: 2516501815)
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    time: new Date().toISOString(),
    student: "2516501815"
  });
});

app.use("/events", eventRoutes);

// 404 Route not found middleware
app.use((req, res) => {
  res.status(404).json({ error: { message: "Route not found" } });
});

export default app;