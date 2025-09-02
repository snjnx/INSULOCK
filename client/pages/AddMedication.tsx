import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BottomTabBar from "../components/BottomTabBar";

export default function AddMedication() {
  const navigate = useNavigate();
  const [medicationName, setMedicationName] = useState("");

  const handleBack = () => {
    navigate("/dashboard");
  };

  const handleSave = () => {
    // Handle save medication logic
    console.log("Saving medication:", medicationName);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-insulock-light-blue to-insulock-primary px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="flex items-center">
          <button
            onClick={handleBack}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4 hover:bg-gray-50 transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-insulock-primary" />
          </button>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold font-scada text-white">
            Add Medication
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold font-poppins text-black mb-6">
            What medication would you like to add?
          </h2>

          {/* Medication input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Medication Name
            </label>
            <input
              type="text"
              value={medicationName}
              onChange={(e) => setMedicationName(e.target.value)}
              placeholder="Start typing and select from the list"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-insulock-primary focus:border-transparent"
            />
          </div>

          {/* Save button */}
          <button
            onClick={handleSave}
            disabled={!medicationName.trim()}
            className="w-full py-3 bg-insulock-primary text-white font-scada font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            Save Medication
          </button>

          {/* Critical medication alert */}
          <div className="mt-6 p-4 bg-red-100 rounded-lg border border-red-200">
            <h3 className="text-sm font-bold text-red-800 mb-1">
              Critical Med Alert
            </h3>
            <p className="text-xs text-red-700">
              Make sure to consult with your healthcare provider before adding any new medications.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomTabBar />
    </div>
  );
}
