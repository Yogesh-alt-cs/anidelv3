import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { cors } from "hono/cors";

const app = new Hono();

// Enable CORS
app.use("*", cors());

// Health check
app.get("/", (c) => c.text("Anidel API v1 running"));

// Search using Jikan
app.get("/api/search", async (c) => {
    const q = c.req.query("q");
    if (!q) return c.json({ error: "Missing query" }, 400);

    try {
        const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(q)}&limit=10`;
        const res = await fetch(url);
        const data = await res.json();
        return c.json(data);
    } catch (err) {
        return c.json({ error: "Failed to fetch from Jikan" }, 500);
    }
});

// IMPORTANT FIX FOR RENDER
const port = process.env.PORT || 3000;
serve({ fetch: app.fetch, port });

console.log("Server running on port", port);
