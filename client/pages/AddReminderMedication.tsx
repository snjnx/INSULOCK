import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BottomTabBar from "../components/BottomTabBar";

export default function AddReminderMedication() {
  const navigate = useNavigate();
  const [selectedMedication, setSelectedMedication] = useState("");

  const handleBack = () => {
    navigate("/add-reminder");
  };

  const handleNext = () => {
    if (selectedMedication.trim()) {
      navigate("/add-reminder/strength", { state: { medication: selectedMedication } });
    }
  };

  const commonMedications = [
    "Insulin",
    "Metformin",
    "Glucagon",
    "Glipizide",
    "Pioglitazone"
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
            What Dose would you like to add?
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8">
        {/* Progress indicator */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-insulock-primary rounded-full flex items-center justify-center mb-8 mx-auto">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-insulock-primary rounded-full"></div>
          </div>
        </div>

        {/* Blue content area */}
        <div className="bg-insulock-background-blue rounded-t-3xl pt-8 sm:pt-10 lg:pt-12 pb-4">
          <div className="px-6 sm:px-8 lg:px-10">
            {/* Search input */}
            <div className="mb-6 sm:mb-8">
              <input
                type="text"
                value={selectedMedication}
                onChange={(e) => setSelectedMedication(e.target.value)}
                placeholder="Start typing and select from the list"
                className="w-full px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5 border-b-2 border-gray-800 bg-transparent text-black placeholder-gray-600 font-poppins text-base sm:text-lg lg:text-xl focus:outline-none focus:border-insulock-primary transition-colors"
              />
            </div>

            {/* Common medications list */}
            <div className="space-y-3 sm:space-y-4 mb-8">
              {commonMedications.map((medication) => (
                <button
                  key={medication}
                  onClick={() => setSelectedMedication(medication)}
                  className={`w-full px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-full font-poppins font-medium text-base sm:text-lg lg:text-xl transition-all ${
                    selectedMedication === medication
                      ? 'bg-insulock-primary text-white'
                      : 'bg-white text-black hover:bg-gray-50'
                  }`}
                >
                  {medication}
                </button>
              ))}
            </div>

            {/* Critical Med Alert */}
            <div className="bg-red-400 rounded-full px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mb-8 text-center">
              <span className="text-black font-poppins font-medium text-base sm:text-lg lg:text-xl">
                Critical Med Alert
              </span>
            </div>

            {/* Next button */}
            <div className="flex justify-center pb-6">
              <button
                onClick={handleNext}
                disabled={!selectedMedication.trim()}
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
