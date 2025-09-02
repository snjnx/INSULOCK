// server/dataStore.js
import fs from "fs";
import path from "path";

const FILE_PATH = path.resolve("./data/history.json");

// Load records from file (if exists)
export function loadHistory() {
  if (fs.existsSync(FILE_PATH)) {
    const raw = fs.readFileSync(FILE_PATH, "utf-8");
    return JSON.parse(raw);
  }
  return [];
}

// Save records to file
export function saveHistory(history) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(history, null, 2));
}
