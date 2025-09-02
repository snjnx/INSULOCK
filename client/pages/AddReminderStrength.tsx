import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BottomTabBar from "../components/BottomTabBar";

export default function AddReminderStrength() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dose, setDose] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("mg");

  const medication = location.state?.medication || "Medication";

  const handleBack = () => {
    navigate("/add-reminder/medication");
  };

  const handleNext = () => {
    if (dose.trim()) {
      navigate("/add-reminder/frequency", { 
        state: { 
          medication,
          dose: `${dose} ${selectedUnit}`
        } 
      });
    }
  };

  const units = ["mg", "g", "mcg", "mEq", "IU"];

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
            What strength is the Med?
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8">
        {/* Progress indicator */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-insulock-primary rounded-full flex items-center justify-center mb-8 mx-auto">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Blue content area */}
        <div className="bg-insulock-background-blue rounded-t-3xl pt-8 sm:pt-10 lg:pt-12 pb-4">
          <div className="px-6 sm:px-8 lg:px-10">
            {/* Dose input */}
            <div className="mb-8">
              <input
                type="number"
                value={dose}
                onChange={(e) => setDose(e.target.value)}
                placeholder="Enter dose amount"
                className="w-full px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5 border-b-2 border-gray-800 bg-transparent text-black placeholder-gray-600 font-poppins text-2xl sm:text-3xl lg:text-4xl text-center focus:outline-none focus:border-insulock-primary transition-colors"
              />
            </div>

            {/* Units selection */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4 mb-8">
              {units.map((unit) => (
                <button
                  key={unit}
                  onClick={() => setSelectedUnit(unit)}
                  className={`px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-lg font-poppins font-medium text-base sm:text-lg lg:text-xl transition-all ${
                    selectedUnit === unit
                      ? 'bg-insulock-primary text-white'
                      : 'bg-white text-black hover:bg-gray-50'
                  }`}
                >
                  {unit}
                </button>
              ))}
            </div>

            {/* Selected dose display */}
            {dose && (
              <div className="text-center mb-8">
                <p className="text-gray-600 font-poppins text-sm sm:text-base mb-2">
                  Selected dose:
                </p>
                <p className="text-black font-poppins font-bold text-xl sm:text-2xl lg:text-3xl">
                  {dose} {selectedUnit}
                </p>
              </div>
            )}

            {/* Next button */}
            <div className="flex justify-center pb-6">
              <button
                onClick={handleNext}
                disabled={!dose.trim()}
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
