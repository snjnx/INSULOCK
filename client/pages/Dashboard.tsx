import { useState } from "react";
import { Settings } from "lucide-react";
import BottomTabBar from "../components/BottomTabBar";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'reminders'>('dashboard');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="w-full h-22 bg-gradient-to-r from-insulock-light-blue to-insulock-primary px-6 py-6 lg:px-8 lg:py-8 flex items-center justify-between">
        <h1 className="text-2xl lg:text-3xl font-bold font-scada text-white">
          Dashboard
        </h1>
        <Settings className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
      </div>

      {/* Tab Navigation */}
      <div className="px-6 py-4 lg:px-8 lg:py-6 flex space-x-4">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`px-6 py-2 lg:px-8 lg:py-3 rounded-full border font-poppins font-bold lg:text-lg transition-all ${
            activeTab === 'dashboard'
              ? 'bg-gradient-to-r from-insulock-primary-light to-insulock-primary text-white'
              : 'border-black text-black bg-white'
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab('reminders')}
          className={`px-6 py-2 lg:px-8 lg:py-3 rounded-full border font-poppins font-bold lg:text-lg transition-all ${
            activeTab === 'reminders'
              ? 'bg-gradient-to-r from-insulock-primary-light to-insulock-primary text-white'
              : 'border-black text-black bg-white'
          }`}
        >
          Reminders
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-4 lg:px-8 lg:py-6 space-y-6 lg:space-y-8">
        {activeTab === 'dashboard' ? (
          <>
            {/* Upcoming Reminder Card */}
            <div className="bg-insulock-background-blue rounded-lg p-4 lg:p-6">
              <h3 className="text-lg font-bold font-scada text-insulock-primary mb-2">
                Upcoming Reminder
              </h3>
              <p className="text-black font-poppins text-sm">
                Daily and weekly views of your medication plans with progress indicators.
              </p>
            </div>

            {/* Missed Medications Card */}
            <div className="bg-insulock-background-blue rounded-lg p-4 lg:p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold font-scada text-insulock-primary">
                  Missed Medications
                </h3>
                <div className="w-7 h-5 bg-alert-warning rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">!</span>
                </div>
              </div>
              <p className="text-black font-poppins text-sm mb-4">
                Missed dose at 8:00 AM.
              </p>
              <button className="px-6 py-2 bg-insulock-primary text-white font-scada font-bold rounded-lg hover:bg-blue-700 transition-colors">
                Reschedule
              </button>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-insulock-background-blue rounded-lg p-4 lg:p-6">
              <h3 className="text-lg font-bold font-scada text-insulock-primary mb-2">
                Quick Actions
              </h3>
              <p className="text-black font-poppins text-sm mb-4">
                Easily add or edit medications and view your medication history.
              </p>
              <button className="px-6 py-2 bg-insulock-primary text-white font-scada font-bold rounded-lg hover:bg-blue-700 transition-colors">
                Add Medication
              </button>
            </div>

            {/* Today's Insulin Doses */}
            <div className="bg-insulock-background-blue rounded-lg p-4 lg:p-6">
              <h3 className="text-lg font-bold font-scada text-insulock-primary mb-2">
                Today's Insulin Doses
              </h3>
              <div className="text-black font-poppins text-sm space-y-1">
                <p>Take 1st Dose of insulin 12 units at 8:00 AM.</p>
                <p>Take 2nd Dose of 8 units insulin 6:00 PM.</p>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Reminders content */}
            <div className="bg-insulock-background-blue rounded-lg p-4 lg:p-6">
              <h3 className="text-lg font-bold font-scada text-insulock-primary mb-2">
                Missed Doses Alerts
              </h3>
              <p className="text-black font-poppins text-sm">
                You missed 1 dose today. Mark it as taken or reschedule
              </p>
            </div>
          </>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomTabBar />
    </div>
  );
}
