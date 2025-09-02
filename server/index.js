import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }, // allow React frontend
});

// --- WebSocket Server (for React) ---
io.on("connection", (socket) => {
  console.log("React client connected");
  socket.on("disconnect", () => {
    console.log("React client disconnected");
  });
});

// --- Express Middleware ---
app.use(express.json());

// --- API Endpoint (called by Python receiver.py via HTTP POST) ---
app.post("/data", (req, res) => {
  const { message } = req.body;
  console.log("Received from Python via HTTP:", message);

  // forward to React via WebSocket
  io.emit("insulin_data", message);

  res.status(200).send("OK");
});

// --- Start Express Server ---
const API_PORT = 4000;
server.listen(API_PORT, () => {
  console.log(`Express + WebSocket server running on http://localhost:${API_PORT}`);
});
