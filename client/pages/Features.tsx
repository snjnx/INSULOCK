import { useNavigate } from "react-router-dom";
import { Clock, Activity } from "lucide-react";

export default function Features() {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate("/login");
  };

  const handleNext = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with Skip button */}
      <div className="flex justify-end p-6 lg:p-8">
        <button
          onClick={handleSkip}
          className="px-6 py-2 lg:px-8 lg:py-3 bg-gray-700 text-white font-bold font-inter text-xl lg:text-2xl rounded-xl hover:bg-gray-800 transition-colors"
        >
          Skip
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-2xl lg:text-3xl font-bold font-poppins text-black mb-12 lg:mb-16">
          Key Features
        </h1>

        {/* Medical illustration */}
        <div className="w-full max-w-lg lg:max-w-2xl mb-16 lg:mb-20 px-4">
          <div className="relative">
            <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center overflow-hidden">
              {/* Medical scene with calendar and medications */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Calendar/schedule visualization */}
                <div className="absolute left-8 top-8 bg-white rounded-lg p-4 shadow-lg">
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className={`w-6 h-6 rounded ${i === 4 ? 'bg-insulock-primary' : 'bg-gray-200'}`}></div>
                    ))}
                  </div>
                </div>
                
                {/* Medication bottles */}
                <div className="absolute right-8 bottom-8 flex space-x-2">
                  <div className="w-8 h-16 bg-red-400 rounded-t-lg"></div>
                  <div className="w-8 h-20 bg-insulock-primary rounded-t-lg"></div>
                  <div className="w-8 h-12 bg-green-400 rounded-t-lg"></div>
                </div>

                {/* Doctor figure */}
                <div className="absolute right-16 top-16">
                  <div className="w-20 h-24 bg-gradient-to-b from-blue-100 to-blue-200 rounded-t-full"></div>
                  <div className="w-16 h-10 bg-pink-200 rounded-full mx-auto -mt-2"></div>
                </div>

                {/* Check mark */}
                <div className="absolute left-16 bottom-16 w-16 h-16 bg-insulock-primary rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features list */}
        <div className="w-full max-w-md lg:max-w-lg space-y-8 lg:space-y-10">
          {/* Smart Reminders */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold font-inter text-black mb-1">
                Smart Reminders
              </h3>
              <p className="text-sm lg:text-base font-inter text-black">
                Receive timely notifications for all your medications.
              </p>
            </div>
          </div>

          {/* Health Monitoring */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0">
              <Activity className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold font-inter text-black mb-1">
                Health Monitoring
              </h3>
              <p className="text-sm lg:text-base font-inter text-black">
                Track your health progress and medication adherence.
              </p>
            </div>
          </div>
        </div>

        {/* Continue button */}
        <div className="mt-16 lg:mt-20">
          <button
            onClick={handleNext}
            className="px-8 py-3 lg:px-10 lg:py-4 bg-gradient-to-r from-insulock-primary-light to-insulock-primary text-white font-bold font-inter text-lg lg:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
