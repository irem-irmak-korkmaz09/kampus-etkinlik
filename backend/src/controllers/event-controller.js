import { Event } from "../models/event-model.js";

// GET /events (?category=Atölye isteğe bağlı)
export async function getEvents(req, res, next) {
  try {
    const filter = req.query.category ? { category: req.query.category } : {};
    const list = await Event.find(filter).sort({ date: 1, time: 1 }).lean();
    res.json(list);
  } catch (err) {
    next(err);
  }
}

// GET /events/:id
export async function getEventById(req, res, next) {
  try {
    const event = await Event.findById(req.params.id).lean();
    if (!event) {
      return res.status(404).json({ error: { message: "Event not found" } });
    }
    res.json(event);
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(404).json({ error: { message: "Event not found" } });
    }
    next(err);
  }
}

// POST /events
export async function createEvent(req, res, next) {
  try {
    const { title, category, capacity, date, time, location, description } = req.body ?? {};

    if (!title || !category || !date) {
      return res.status(400).json({
        error: { message: "title, category and date are required" }
      });
    }

    const created = await Event.create({
      title: String(title).trim(),
      category,
      date,
      capacity: Number(capacity) || 0,
      time: time ?? "",
      location: location ?? "",
      description: description ?? ""
    });

    res.status(201).json(created);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: { message: err.message } });
    }
    next(err);
  }
}