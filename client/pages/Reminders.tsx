import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Settings, Plus, Clock, AlertTriangle } from "lucide-react";
import BottomTabBar from "../components/BottomTabBar";

interface Reminder {
  id: string;
  medication: string;
  dose: string;
  time: string;
  frequency: string;
  status: 'active' | 'missed' | 'completed';
}

export default function Reminders() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'active' | 'history'>('active');

  // Mock reminder data
  const [reminders] = useState<Reminder[]>([
    {
      id: '1',
      medication: 'Insulin',
      dose: '12 units',
      time: '8:00 AM',
      frequency: 'Daily',
      status: 'missed'
    },
    {
      id: '2',
      medication: 'Insulin',
      dose: '8 units',
      time: '6:00 PM',
      frequency: 'Daily',
      status: 'active'
    },
    {
      id: '3',
      medication: 'Metformin',
      dose: '500mg',
      time: '7:00 AM',
      frequency: 'Daily',
      status: 'completed'
    }
  ]);

  const handleAddReminder = () => {
    navigate("/add-reminder");
  };

  const handleReschedule = (reminderId: string) => {
    console.log('Reschedule reminder:', reminderId);
  };

  const handleMarkTaken = (reminderId: string) => {
    console.log('Mark taken:', reminderId);
  };

  const activeReminders = reminders.filter(r => r.status === 'active' || r.status === 'missed');
  const historyReminders = reminders.filter(r => r.status === 'completed');

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
          onClick={() => setActiveTab('active')}
          className={`px-4 py-2 sm:px-6 sm:py-2 lg:px-8 lg:py-3 rounded-full border font-poppins font-bold text-sm sm:text-base lg:text-lg transition-all ${
            activeTab === 'active'
              ? 'bg-gradient-to-r from-insulock-primary-light to-insulock-primary text-white border-transparent'
              : 'border-black text-black bg-white'
          }`}
        >
          Active Reminders
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`px-4 py-2 sm:px-6 sm:py-2 lg:px-8 lg:py-3 rounded-full border font-poppins font-bold text-sm sm:text-base lg:text-lg transition-all ${
            activeTab === 'history'
              ? 'bg-gradient-to-r from-insulock-primary-light to-insulock-primary text-white border-transparent'
              : 'border-black text-black bg-white'
          }`}
        >
          History
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-2 sm:px-6 sm:py-4 lg:px-8 lg:py-6">
        {activeTab === 'active' ? (
          <div className="space-y-4 lg:space-y-6">
            {/* Add New Reminder Button */}
            <button
              onClick={handleAddReminder}
              className="w-full p-4 lg:p-6 border-2 border-dashed border-insulock-primary rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
            >
              <Plus className="w-5 h-5 lg:w-6 lg:h-6 text-insulock-primary" />
              <span className="text-insulock-primary font-poppins font-medium text-sm sm:text-base lg:text-lg">
                Add New Reminder
              </span>
            </button>

            {/* Active Reminders List */}
            {activeReminders.map((reminder) => (
              <div
                key={reminder.id}
                className={`bg-insulock-background-blue rounded-lg p-4 lg:p-6 border-l-4 ${
                  reminder.status === 'missed' ? 'border-red-500' : 'border-green-500'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${
                      reminder.status === 'missed' ? 'bg-red-500' : 'bg-green-500'
                    }`}></div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold font-scada text-insulock-primary">
                      {reminder.medication}
                    </h3>
                    {reminder.status === 'missed' && (
                      <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                    )}
                  </div>
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                </div>

                <div className="mb-4">
                  <p className="text-black font-poppins text-sm sm:text-base">
                    <span className="font-semibold">Dose:</span> {reminder.dose}
                  </p>
                  <p className="text-black font-poppins text-sm sm:text-base">
                    <span className="font-semibold">Time:</span> {reminder.time}
                  </p>
                  <p className="text-black font-poppins text-sm sm:text-base">
                    <span className="font-semibold">Frequency:</span> {reminder.frequency}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  {reminder.status === 'missed' ? (
                    <>
                      <button
                        onClick={() => handleReschedule(reminder.id)}
                        className="px-4 py-2 lg:px-6 lg:py-3 bg-insulock-primary text-white font-scada font-bold text-sm sm:text-base lg:text-lg rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Reschedule
                      </button>
                      <button
                        onClick={() => handleMarkTaken(reminder.id)}
                        className="px-4 py-2 lg:px-6 lg:py-3 bg-green-500 text-white font-scada font-bold text-sm sm:text-base lg:text-lg rounded-lg hover:bg-green-600 transition-colors"
                      >
                        Mark as Taken
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleMarkTaken(reminder.id)}
                      className="px-4 py-2 lg:px-6 lg:py-3 bg-green-500 text-white font-scada font-bold text-sm sm:text-base lg:text-lg rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Mark as Taken
                    </button>
                  )}
                </div>
              </div>
            ))}

            {activeReminders.length === 0 && (
              <div className="text-center py-8 lg:py-12">
                <Clock className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-poppins text-sm sm:text-base lg:text-lg">
                  No active reminders. Add one to get started!
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4 lg:space-y-6">
            {/* History List */}
            {historyReminders.map((reminder) => (
              <div
                key={reminder.id}
                className="bg-gray-50 rounded-lg p-4 lg:p-6 border-l-4 border-gray-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold font-scada text-gray-700">
                      {reminder.medication}
                    </h3>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500 bg-green-100 px-2 py-1 rounded-full">
                    Completed
                  </span>
                </div>

                <div>
                  <p className="text-gray-600 font-poppins text-sm sm:text-base">
                    <span className="font-semibold">Dose:</span> {reminder.dose} at {reminder.time}
                  </p>
                </div>
              </div>
            ))}

            {historyReminders.length === 0 && (
              <div className="text-center py-8 lg:py-12">
                <Clock className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-poppins text-sm sm:text-base lg:text-lg">
                  No completed reminders yet.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomTabBar />
    </div>
  );
}
