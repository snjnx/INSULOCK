import { useNavigate } from "react-router-dom";
import { ArrowLeft, Settings } from "lucide-react";
import BottomTabBar from "../components/BottomTabBar";

export default function Profile() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-insulock-light-blue to-insulock-primary px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={handleBack}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4 hover:bg-gray-50 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 text-insulock-primary" />
            </button>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold font-poppins text-white">
              Settings
            </h1>
          </div>
          <Settings className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto space-y-6">
          {/* User Profile Section */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold font-poppins text-insulock-primary mb-4">
              User Profile
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Medication
                </label>
                <input
                  type="text"
                  placeholder="insulin"
                  className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-insulock-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Medication time
                </label>
                <textarea
                  placeholder="8am and 6pm "
                  rows={3}
                  className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-insulock-primary focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Medication dosage
                </label>
                <input
                  type="tel"
                  placeholder="12mg"
                  className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-insulock-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* General Settings */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold font-poppins text-insulock-primary mb-4">
              General
            </h2>
            
            <div className="space-y-3 text-black font-poppins">
              <div className="py-2 hover:text-insulock-primary cursor-pointer transition-colors">
                Registration and login
              </div>
              <div className="py-2 hover:text-insulock-primary cursor-pointer transition-colors">
                Notification settings
              </div>
              <div className="py-2 hover:text-insulock-primary cursor-pointer transition-colors">
                Privacy
              </div>
              <div className="py-2 hover:text-insulock-primary cursor-pointer transition-colors">
                Medication Dashboard
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="pt-4 border-t border-gray-200">
            <div className="space-y-2 text-sm text-black font-poppins">
              <div className="py-1 hover:text-insulock-primary cursor-pointer transition-colors">
                Customer service
              </div>
              <div className="py-1 hover:text-insulock-primary cursor-pointer transition-colors">
                Help and support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomTabBar />
    </div>
  );
}
