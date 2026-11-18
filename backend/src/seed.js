import "dotenv/config";
import mongoose from "mongoose";
import { connectDatabase } from "./config/database.js";
import { Event } from "./models/event-model.js";
import { seedEvents } from "./data/seed-events.js";

async function seed() {
  try {
    await connectDatabase();
    await Event.deleteMany({});
    const inserted = await Event.insertMany(seedEvents);
    console.log(`${inserted.length} etkinlik veritabanına eklendi.`);
  } catch (err) {
    console.error("Seed hatası:", err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
}

seed();