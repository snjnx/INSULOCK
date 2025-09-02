import { useState, useEffect } from "react";
import { Settings } from "lucide-react";
import BottomTabBar from "../components/BottomTabBar";
import { io } from "socket.io-client";

// ✅ Add this
const socket = io("http://localhost:4000"); // ✅ match backend WebSocket port

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "reminders">("dashboard");
  const [insulinData, setInsulinData] = useState<{ dosage: string; timestamp: string }[]>([]);

  // ✅ Listen for real-time dosage updates
  useEffect(() => {
    socket.on("insulin_data", (message: string) => {
      const [dosage, timestamp] = message.split(",");
      setInsulinData((prev) => [...prev, { dosage, timestamp }]);
    });

    return () => {
      socket.off("insulin_data");
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="w-full h-22 bg-gradient-to-r from-insulock-light-blue to-insulock-primary px-6 py-6 lg:px-8 lg:py-8 flex items-center justify-between">
        <h1 className="text-2xl lg:text-3xl font-bold font-scada text-white">
          Dashboard
        </h1>
        <Settings className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-4 lg:px-8 lg:py-6 space-y-6 lg:space-y-8">
        {activeTab === "dashboard" ? (
          <>
            {/* ✅ Replace “Today's Insulin Doses” card with live updates */}
            <div className="bg-insulock-background-blue rounded-lg p-4 lg:p-6">
              <h3 className="text-lg font-bold font-scada text-insulock-primary mb-2">
                Today's Insulin Doses
              </h3>
              <div className="text-black font-poppins text-sm space-y-1">
                {insulinData.length === 0 ? (
                  <p>No doses recorded yet.</p>
                ) : (
                  insulinData.map((entry, idx) => (
                    <p key={idx}>
                      💉 {entry.dosage} units at 🕒 {entry.timestamp}
                    </p>
                  ))
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Reminders content (unchanged) */}
          </>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomTabBar />
    </div>
  );
}
