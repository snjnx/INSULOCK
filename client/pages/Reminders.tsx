import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Settings, Plus, Clock } from "lucide-react";
import BottomTabBar from "../components/BottomTabBar";
import { useReminders } from "./RemainderContext";

export function Reminders() {
  const { reminders } = useReminders(); 
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"active" | "history">("active");

  const handleAddReminder = () => {
    navigate("/add-reminder");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-insulock-light-blue to-insulock-primary px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold font-scada text-white">
            Reminders
          </h1>
          <Settings className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 flex space-x-3 sm:space-x-4">
        <button
          onClick={() => setActiveTab("active")}
          className={`px-4 py-2 rounded-full border font-bold transition-all ${
            activeTab === "active"
              ? "bg-insulock-primary text-white border-transparent"
              : "border-black text-black bg-white"
          }`}
        >
          Active Reminders
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={`px-4 py-2 rounded-full border font-bold transition-all ${
            activeTab === "history"
              ? "bg-insulock-primary text-white border-transparent"
              : "border-black text-black bg-white"
          }`}
        >
          History
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-2 sm:px-6 sm:py-4 lg:px-8 lg:py-6">
        {activeTab === "active" ? (
          <div className="space-y-4">
            {/* Add New Reminder Button */}
            <button
              onClick={handleAddReminder}
              className="w-full p-4 border-2 border-dashed border-insulock-primary rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
            >
              <Plus className="w-5 h-5 text-insulock-primary" />
              <span className="text-insulock-primary font-medium">
                Add New Reminder
              </span>
            </button>

            {/* Active Reminders */}
            {reminders.length > 0 ? (
              reminders.map((reminder) => (
                <div
                  key={reminder.id}
                  className="bg-insulock-background-blue rounded-lg p-4 border-l-4 border-green-500"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-insulock-primary">
                      {reminder.medication}
                    </h3>
                    <Clock className="w-4 h-4 text-gray-500" />
                  </div>
                  <p className="text-black text-sm">
                    <span className="font-semibold">Dose:</span>{" "}
                    {reminder.dosage}
                  </p>
                  <p className="text-black text-sm">
                    <span className="font-semibold">Time:</span> {reminder.time}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <Clock className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No active reminders. Add one!</p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            History feature coming soon.
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomTabBar />
    </div>
  );
}
