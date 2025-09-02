import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BottomTabBar from "../components/BottomTabBar";

export default function AddReminderTime() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState("");

  const medication = location.state?.medication || "Medication";
  const dose = location.state?.dose || "Dose";
  const frequency = location.state?.frequency || "Frequency";

  const handleBack = () => {
    navigate("/add-reminder/frequency");
  };

  const handleNext = () => {
    if (selectedTimeOfDay) {
      navigate("/add-reminder/set-time", { 
        state: { 
          medication,
          dose,
          frequency,
          timeOfDay: selectedTimeOfDay
        } 
      });
    }
  };

  const timesOfDay = [
    { id: "morning", label: "Morning", description: "6:00 AM - 11:59 AM" },
    { id: "noon", label: "Noon", description: "12:00 PM - 2:59 PM" },
    { id: "evening", label: "Evening", description: "3:00 PM - 7:59 PM" },
    { id: "night", label: "Night", description: "8:00 PM - 5:59 AM" }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="flex items-center">
          <button
            onClick={handleBack}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center mr-4 hover:bg-gray-50 transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-insulock-primary" />
          </button>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold font-poppins text-black">
            At what time of day do you take your first dose?
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8">
        {/* Progress indicator with clock */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-insulock-primary rounded-full flex items-center justify-center mb-8 mx-auto">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center relative">
            {/* Clock face */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full relative">
              {/* Clock hands */}
              <div className="absolute top-1/2 left-1/2 w-0.5 h-3 sm:h-4 bg-gray-800 transform -translate-x-1/2 -translate-y-full origin-bottom"></div>
              <div className="absolute top-1/2 left-1/2 w-0.5 h-2 sm:h-3 bg-gray-600 transform -translate-x-1/2 -translate-y-full origin-bottom rotate-90"></div>
              <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>

        {/* Blue content area */}
        <div className="bg-insulock-background-blue rounded-t-3xl pt-8 sm:pt-10 lg:pt-12 pb-4">
          <div className="px-6 sm:px-8 lg:px-10">
            {/* Time of day options */}
            <div className="space-y-4 sm:space-y-6 mb-8">
              {timesOfDay.map((timeOption) => (
                <button
                  key={timeOption.id}
                  onClick={() => setSelectedTimeOfDay(timeOption.id)}
                  className={`w-full px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6 rounded-full font-poppins font-medium text-base sm:text-lg lg:text-xl transition-all ${
                    selectedTimeOfDay === timeOption.id
                      ? 'bg-insulock-primary text-white shadow-lg'
                      : 'bg-insulock-accent-blue text-black hover:bg-blue-200'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-bold">{timeOption.label}</div>
                    <div className="text-sm sm:text-base opacity-80 mt-1">
                      {timeOption.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected time display */}
            {selectedTimeOfDay && (
              <div className="text-center mb-8 p-4 bg-white rounded-lg">
                <p className="text-gray-600 font-poppins text-sm sm:text-base mb-2">
                  You selected:
                </p>
                <p className="text-black font-poppins font-bold text-lg sm:text-xl lg:text-2xl">
                  {timesOfDay.find(t => t.id === selectedTimeOfDay)?.label}
                </p>
                <p className="text-gray-600 font-poppins text-sm sm:text-base mt-1">
                  {timesOfDay.find(t => t.id === selectedTimeOfDay)?.description}
                </p>
              </div>
            )}

            {/* Medication summary */}
            <div className="bg-white rounded-lg p-4 sm:p-6 mb-8">
              <h3 className="font-poppins font-bold text-base sm:text-lg lg:text-xl text-black mb-3">
                Reminder Summary
              </h3>
              <div className="space-y-2 text-sm sm:text-base">
                <p><span className="font-semibold">Medication:</span> {medication}</p>
                <p><span className="font-semibold">Dose:</span> {dose}</p>
                <p><span className="font-semibold">Frequency:</span> {frequency}</p>
                {selectedTimeOfDay && (
                  <p><span className="font-semibold">Time of Day:</span> {timesOfDay.find(t => t.id === selectedTimeOfDay)?.label}</p>
                )}
              </div>
            </div>

            {/* Next button */}
            <div className="flex justify-center pb-6">
              <button
                onClick={handleNext}
                disabled={!selectedTimeOfDay}
                className="px-8 py-3 sm:px-12 sm:py-4 lg:px-16 lg:py-5 bg-gradient-to-r from-insulock-primary-light to-insulock-primary text-white font-scada font-bold text-base sm:text-lg lg:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomTabBar />
    </div>
  );
}
