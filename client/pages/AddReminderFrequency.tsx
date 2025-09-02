import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BottomTabBar from "../components/BottomTabBar";

export default function AddReminderFrequency() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedFrequency, setSelectedFrequency] = useState("");

  const medication = location.state?.medication || "Medication";
  const dose = location.state?.dose || "Dose";

  const handleBack = () => {
    navigate("/add-reminder/strength");
  };

  const handleNext = () => {
    if (selectedFrequency) {
      navigate("/add-reminder/time", { 
        state: { 
          medication,
          dose,
          frequency: selectedFrequency
        } 
      });
    }
  };

  const frequencies = [
    { id: "daily", label: "Yes", description: "Take every day" },
    { id: "as-needed", label: "No", description: "As needed only" },
    { id: "specific", label: "Only as needed", description: "When required" }
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
            Do you need to take this med every day?
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8">
        {/* Progress indicator */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-insulock-primary rounded-full flex items-center justify-center mb-8 mx-auto">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center relative">
            {/* Star/badge shape */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white" style={{
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
            }}></div>
          </div>
        </div>

        {/* Blue content area */}
        <div className="bg-insulock-background-blue rounded-t-3xl pt-8 sm:pt-10 lg:pt-12 pb-4">
          <div className="px-6 sm:px-8 lg:px-10">
            {/* Frequency options */}
            <div className="space-y-4 sm:space-y-6 mb-8">
              {frequencies.map((frequency) => (
                <button
                  key={frequency.id}
                  onClick={() => setSelectedFrequency(frequency.id)}
                  className={`w-full px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6 rounded-full font-poppins font-medium text-base sm:text-lg lg:text-xl transition-all ${
                    selectedFrequency === frequency.id
                      ? 'bg-insulock-primary text-white shadow-lg'
                      : 'bg-insulock-accent-blue text-black hover:bg-blue-200'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-bold">{frequency.label}</div>
                    <div className="text-sm sm:text-base opacity-80 mt-1">
                      {frequency.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected frequency display */}
            {selectedFrequency && (
              <div className="text-center mb-8 p-4 bg-white rounded-lg">
                <p className="text-gray-600 font-poppins text-sm sm:text-base mb-2">
                  You selected:
                </p>
                <p className="text-black font-poppins font-bold text-lg sm:text-xl lg:text-2xl">
                  {frequencies.find(f => f.id === selectedFrequency)?.label}
                </p>
                <p className="text-gray-600 font-poppins text-sm sm:text-base mt-1">
                  {frequencies.find(f => f.id === selectedFrequency)?.description}
                </p>
              </div>
            )}

            {/* Medication summary */}
            <div className="bg-white rounded-lg p-4 sm:p-6 mb-8">
              <h3 className="font-poppins font-bold text-base sm:text-lg lg:text-xl text-black mb-3">
                Medication Summary
              </h3>
              <div className="space-y-2 text-sm sm:text-base">
                <p><span className="font-semibold">Medication:</span> {medication}</p>
                <p><span className="font-semibold">Dose:</span> {dose}</p>
                {selectedFrequency && (
                  <p><span className="font-semibold">Frequency:</span> {frequencies.find(f => f.id === selectedFrequency)?.label}</p>
                )}
              </div>
            </div>

            {/* Next button */}
            <div className="flex justify-center pb-6">
              <button
                onClick={handleNext}
                disabled={!selectedFrequency}
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
