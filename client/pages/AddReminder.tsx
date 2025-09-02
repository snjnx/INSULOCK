import { useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import BottomTabBar from "../components/BottomTabBar";

export default function AddReminder() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/reminders");
  };

  const handleClose = () => {
    navigate("/reminders");
  };

  const handleAddMed = () => {
    navigate("/add-reminder/medication");
  };

  return (
    <div className="min-h-screen bg-insulock-background-blue flex flex-col">
      {/* Header with close button */}
      <div className="flex justify-start p-4 sm:p-6 lg:p-8">
        <button
          onClick={handleClose}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pb-8">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-poppins text-black text-center mb-8 sm:mb-12 lg:mb-16 max-w-md">
          Add your first Medication to get a Reminder
        </h1>

        {/* Medication icon illustration */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mb-8 sm:mb-12 lg:mb-16">
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center relative overflow-hidden">
            {/* Stylized medication/pill bottle */}
            <div className="relative">
              {/* Main bottle shape */}
              <div className="w-20 h-32 sm:w-24 sm:h-36 lg:w-28 lg:h-40 bg-gradient-to-b from-insulock-primary to-blue-600 rounded-lg relative">
                {/* Bottle cap */}
                <div className="w-16 h-6 sm:w-20 sm:h-7 lg:w-24 lg:h-8 bg-gray-700 rounded-t-lg mx-auto"></div>
                
                {/* Pills inside */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 space-y-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full opacity-80"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full opacity-60"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full opacity-40"></div>
                </div>

                {/* Label */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-6 sm:w-14 sm:h-7 bg-white rounded opacity-90 flex items-center justify-center">
                  <div className="w-8 h-1 sm:w-10 sm:h-1 bg-gray-400 rounded"></div>
                </div>
              </div>

              {/* Floating effect elements */}
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-300 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 bg-blue-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Add Medication Button */}
        <button
          onClick={handleAddMed}
          className="w-full max-w-xs sm:max-w-sm px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 bg-gradient-to-r from-insulock-primary-light to-insulock-primary text-white font-bold font-scada text-lg sm:text-xl lg:text-2xl rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          Add your Med
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomTabBar />
    </div>
  );
}
