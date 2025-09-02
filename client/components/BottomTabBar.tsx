import { useNavigate, useLocation } from "react-router-dom";
import { Home, Plus, User, Clock } from "lucide-react";

export default function BottomTabBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const handleAddClick = () => {
    navigate("/add-medication");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const isDashboard = location.pathname === "/dashboard";
  const isProfile = location.pathname === "/profile";
  // const isReminders = location.pathname === "/reminders" || location.pathname.startsWith("/add-reminder");

  // const handleRemindersClick = () => {
  //   navigate("/reminders");
  // };

  return (
    <div className="bg-gradient-to-t from-white via-white to-transparent px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6">
      <div className="bg-white rounded-xl shadow-lg px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 max-w-lg mx-auto">
        <div className="flex items-center justify-between">
          {/* Dashboard/Home icon */}
          <button
            onClick={handleDashboardClick}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
              isDashboard ? 'bg-blue-50' : ''
            }`}
            aria-label="Dashboard"
          >
            <div className="relative">
              {/* Custom dashboard grid icon */}
              <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 grid grid-cols-2 gap-1">
                <div className={`rounded-sm transition-colors ${
                  isDashboard ? 'bg-insulock-primary' : 'bg-gray-400'
                }`}></div>
                <div className={`rounded-sm transition-colors ${
                  isDashboard ? 'bg-insulock-primary' : 'bg-gray-400'
                }`}></div>
                <div className={`rounded-sm transition-colors ${
                  isDashboard ? 'bg-insulock-primary' : 'bg-gray-400'
                }`}></div>
                <div className={`rounded-sm transition-colors ${
                  isDashboard ? 'bg-insulock-primary' : 'bg-gray-400'
                }`}></div>
              </div>
            </div>
            <span className={`text-xs mt-1 font-medium transition-colors ${
              isDashboard ? 'text-insulock-primary' : 'text-gray-500'
            }`}>
              Dashboard
            </span>
          </button>

          {/* Reminders icon */}
          {/* <button
            onClick={handleRemindersClick}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
              isReminders ? 'bg-blue-50' : ''
            }`}
            aria-label="Reminders"
          >
            <Clock className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 transition-colors hover:text-blue-700 ${
              isReminders ? 'text-insulock-primary' : 'text-gray-400'
            }`} />
            <span className={`text-xs mt-1 font-medium transition-colors ${
              isReminders ? 'text-insulock-primary' : 'text-gray-500'
            }`}>
              Reminders
            </span>
          </button> */}

          {/* Add button */}
          {/* <button
            onClick={handleAddClick}
            className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-insulock-primary rounded-2xl shadow-lg flex items-center justify-center transition-all duration-200 hover:bg-blue-700 hover:scale-105 active:scale-95"
            aria-label="Add Medication"
          >
            <Plus className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
          </button> */}

          {/* Profile icon */}
          <button
            onClick={handleProfileClick}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
              isProfile ? 'bg-blue-50' : ''
            }`}
            aria-label="Profile"
          >
            <User className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 transition-colors hover:text-blue-700 ${
              isProfile ? 'text-insulock-primary' : 'text-insulock-primary'
            }`} />
            <span className={`text-xs mt-1 font-medium transition-colors ${
              isProfile ? 'text-insulock-primary' : 'text-gray-500'
            }`}>
              Profile
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
