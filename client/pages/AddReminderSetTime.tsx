// import { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import BottomTabBar from "../components/BottomTabBar";

// export default function AddReminderSetTime() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [hours, setHours] = useState(8);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   const [snoozeMinutes, setSnoozeMinutes] = useState(5);

//   const medication = location.state?.medication || "Medication";
//   const dose = location.state?.dose || "Dose";
//   const frequency = location.state?.frequency || "Frequency";
//   const timeOfDay = location.state?.timeOfDay || "Time of Day";

//   const handleBack = () => {
//     navigate("/add-reminder/time");
//   };

//   const handleSave = () => {
//     const reminderData = {
//       medication,
//       dose,
//       frequency,
//       timeOfDay,
//       time: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`,
//       snoozeMinutes
//     };
    
//     console.log('Saving reminder:', reminderData);
//     // Here you would typically save to a database or state management
//     navigate("/reminders");
//   };

//   const snoozeOptions = [2, 5, 10];

//   return (
//     <div className="min-h-screen bg-white flex flex-col">
//       {/* Header */}
//       <div className="w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
//         <div className="flex items-center">
//           <button
//             onClick={handleBack}
//             className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center mr-4 hover:bg-gray-50 transition-colors"
//             aria-label="Go back"
//           >
//             <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-insulock-primary" />
//           </button>
//           <h1 className="text-lg sm:text-xl lg:text-2xl font-bold font-poppins text-black">
//             Set Time
//           </h1>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex-1">
//         {/* Blue content area */}
//         <div className="bg-insulock-background-blue min-h-full pt-8 sm:pt-10 lg:pt-12 pb-4">
//           <div className="px-6 sm:px-8 lg:px-10">
//             {/* Time labels */}
//             <div className="grid grid-cols-3 gap-4 text-center mb-4">
//               <div>
//                 <span className="text-gray-600 font-mina font-bold text-sm sm:text-base lg:text-lg">Hours</span>
//               </div>
//               <div>
//                 <span className="text-gray-600 font-mina font-bold text-sm sm:text-base lg:text-lg">Minutes</span>
//               </div>
//               <div>
//                 <span className="text-gray-600 font-mina font-bold text-sm sm:text-base lg:text-lg">Seconds</span>
//               </div>
//             </div>

//             {/* Time picker display */}
//             <div className="text-center mb-8">
//               {/* Previous time (faded) */}
//               <div className="text-gray-400 font-poppins text-2xl sm:text-3xl lg:text-4xl mb-2 opacity-50">
//                 {(hours - 1).toString().padStart(2, '0')}    {(minutes - 1).toString().padStart(2, '0')}    {(seconds - 1).toString().padStart(2, '0')}
//               </div>
              
//               {/* Current time (highlighted) */}
//               <div className="text-black font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-2">
//                 {hours.toString().padStart(2, '0')}  :   {minutes.toString().padStart(2, '0')}   :  {seconds.toString().padStart(2, '0')}
//               </div>
              
//               {/* Next time (faded) */}
//               <div className="text-gray-400 font-poppins text-2xl sm:text-3xl lg:text-4xl opacity-50">
//                 {(hours + 1).toString().padStart(2, '0')}    {(minutes + 1).toString().padStart(2, '0')}    {(seconds + 1).toString().padStart(2, '0')}
//               </div>
//             </div>

//             {/* Time adjustment controls */}
//             <div className="grid grid-cols-3 gap-4 mb-8">
//               {/* Hours */}
//               <div className="flex flex-col items-center space-y-2">
//                 <button
//                   onClick={() => setHours(Math.min(23, hours + 1))}
//                   className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-50"
//                 >
//                   +
//                 </button>
//                 <button
//                   onClick={() => setHours(Math.max(0, hours - 1))}
//                   className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-50"
//                 >
//                   -
//                 </button>
//               </div>

//               {/* Minutes */}
//               <div className="flex flex-col items-center space-y-2">
//                 <button
//                   onClick={() => setMinutes(Math.min(59, minutes + 1))}
//                   className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-50"
//                 >
//                   +
//                 </button>
//                 <button
//                   onClick={() => setMinutes(Math.max(0, minutes - 1))}
//                   className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-50"
//                 >
//                   -
//                 </button>
//               </div>

//               {/* Seconds */}
//               <div className="flex flex-col items-center space-y-2">
//                 <button
//                   onClick={() => setSeconds(Math.min(59, seconds + 1))}
//                   className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-50"
//                 >
//                   +
//                 </button>
//                 <button
//                   onClick={() => setSeconds(Math.max(0, seconds - 1))}
//                   className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-50"
//                 >
//                   -
//                 </button>
//               </div>
//             </div>

//             {/* Snooze options */}
//             <div className="mb-8">
//               <h3 className="text-black font-poppins font-bold text-lg sm:text-xl lg:text-2xl text-center mb-4">
//                 Snooze
//               </h3>
//               <div className="flex justify-center space-x-3 sm:space-x-4">
//                 {snoozeOptions.map((option) => (
//                   <button
//                     key={option}
//                     onClick={() => setSnoozeMinutes(option)}
//                     className={`px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full font-poppins font-bold text-sm sm:text-base lg:text-lg transition-all ${
//                       snoozeMinutes === option
//                         ? 'bg-insulock-primary text-white'
//                         : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
//                     }`}
//                   >
//                     {option} Min
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Reminder summary */}
//             <div className="bg-white rounded-lg p-4 sm:p-6 mb-8">
//               <h3 className="font-poppins font-bold text-base sm:text-lg lg:text-xl text-black mb-3">
//                 Final Reminder Details
//               </h3>
//               <div className="space-y-2 text-sm sm:text-base">
//                 <p><span className="font-semibold">Medication:</span> {medication}</p>
//                 <p><span className="font-semibold">Dose:</span> {dose}</p>
//                 <p><span className="font-semibold">Frequency:</span> {frequency}</p>
//                 <p><span className="font-semibold">Time of Day:</span> {timeOfDay}</p>
//                 <p><span className="font-semibold">Exact Time:</span> {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</p>
//                 <p><span className="font-semibold">Snooze:</span> {snoozeMinutes} minutes</p>
//               </div>
//             </div>

//             {/* Save button */}
//             <div className="flex justify-center pb-6">
//               <button
//                 onClick={handleSave}
//                 className="px-8 py-3 sm:px-12 sm:py-4 lg:px-16 lg:py-5 bg-gradient-to-r from-insulock-primary-light to-insulock-primary text-white font-scada font-bold text-base sm:text-lg lg:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Navigation */}
//       <BottomTabBar />
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BottomTabBar from "../components/BottomTabBar";

export default function AddReminderSetTime() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hours, setHours] = useState(8);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [snoozeMinutes, setSnoozeMinutes] = useState(5);

  const medication = location.state?.medication || "Medication";
  const dose = location.state?.dose || "Dose";
  const frequency = location.state?.frequency || "Frequency";
  const timeOfDay = location.state?.timeOfDay || "Time of Day";

  // ✅ new state to display saved reminder
  const [savedReminder, setSavedReminder] = useState<any>(null);

  const handleBack = () => {
    navigate("/add-reminder/time");
  };

  const handleSave = () => {
    const reminderData = {
      medication,
      dose,
      frequency,
      timeOfDay,
      time: `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
      snoozeMinutes,
    };

    setSavedReminder(reminderData); // ✅ show on screen
  };

  const snoozeOptions = [2, 5, 10];

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
            Set Time
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="bg-insulock-background-blue min-h-full pt-8 sm:pt-10 lg:pt-12 pb-4">
          <div className="px-6 sm:px-8 lg:px-10">
            {/* Time labels */}
            <div className="grid grid-cols-3 gap-4 text-center mb-4">
              <div>
                <span className="text-gray-600 font-mina font-bold text-sm sm:text-base lg:text-lg">
                  Hours
                </span>
              </div>
              <div>
                <span className="text-gray-600 font-mina font-bold text-sm sm:text-base lg:text-lg">
                  Minutes
                </span>
              </div>
              <div>
                <span className="text-gray-600 font-mina font-bold text-sm sm:text-base lg:text-lg">
                  Seconds
                </span>
              </div>
            </div>

            {/* Time picker display */}
            <div className="text-center mb-8">
              <div className="text-gray-400 font-poppins text-2xl sm:text-3xl lg:text-4xl mb-2 opacity-50">
                {(hours - 1).toString().padStart(2, "0")}{" "}
                {(minutes - 1).toString().padStart(2, "0")}{" "}
                {(seconds - 1).toString().padStart(2, "0")}
              </div>

              <div className="text-black font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-2">
                {hours.toString().padStart(2, "0")} :{" "}
                {minutes.toString().padStart(2, "0")} :{" "}
                {seconds.toString().padStart(2, "0")}
              </div>

              <div className="text-gray-400 font-poppins text-2xl sm:text-3xl lg:text-4xl opacity-50">
                {(hours + 1).toString().padStart(2, "0")}{" "}
                {(minutes + 1).toString().padStart(2, "0")}{" "}
                {(seconds + 1).toString().padStart(2, "0")}
              </div>
            </div>

            {/* Time adjustment controls */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {/* Hours */}
              <div className="flex flex-col items-center space-y-2">
                <button
                  onClick={() => setHours(Math.min(23, hours + 1))}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-50"
                >
                  +
                </button>
                <button
                  onClick={() => setHours(Math.max(0, hours - 1))}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-50"
                >
                  -
                </button>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center space-y-2">
                <button
                  onClick={() => setMinutes(Math.min(59, minutes + 1))}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-50"
                >
                  +
                </button>
                <button
                  onClick={() => setMinutes(Math.max(0, minutes - 1))}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-50"
                >
                  -
                </button>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center space-y-2">
                <button
                  onClick={() => setSeconds(Math.min(59, seconds + 1))}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-50"
                >
                  +
                </button>
                <button
                  onClick={() => setSeconds(Math.max(0, seconds - 1))}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-50"
                >
                  -
                </button>
              </div>
            </div>

            {/* Snooze options */}
            <div className="mb-8">
              <h3 className="text-black font-poppins font-bold text-lg sm:text-xl lg:text-2xl text-center mb-4">
                Snooze
              </h3>
              <div className="flex justify-center space-x-3 sm:space-x-4">
                {snoozeOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSnoozeMinutes(option)}
                    className={`px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full font-poppins font-bold text-sm sm:text-base lg:text-lg transition-all ${
                      snoozeMinutes === option
                        ? "bg-insulock-primary text-white"
                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    }`}
                  >
                    {option} Min
                  </button>
                ))}
              </div>
            </div>

            {/* Reminder summary (before save) */}
            {!savedReminder && (
              <div className="bg-white rounded-lg p-4 sm:p-6 mb-8">
                <h3 className="font-poppins font-bold text-base sm:text-lg lg:text-xl text-black mb-3">
                  Final Reminder Details
                </h3>
                <div className="space-y-2 text-sm sm:text-base">
                  <p>
                    <span className="font-semibold">Medication:</span>{" "}
                    {medication}
                  </p>
                  <p>
                    <span className="font-semibold">Dose:</span> {dose}
                  </p>
                  <p>
                    <span className="font-semibold">Frequency:</span>{" "}
                    {frequency}
                  </p>
                  <p>
                    <span className="font-semibold">Time of Day:</span>{" "}
                    {timeOfDay}
                  </p>
                  <p>
                    <span className="font-semibold">Exact Time:</span>{" "}
                    {hours.toString().padStart(2, "0")}:
                    {minutes.toString().padStart(2, "0")}:
                    {seconds.toString().padStart(2, "0")}
                  </p>
                  <p>
                    <span className="font-semibold">Snooze:</span>{" "}
                    {snoozeMinutes} minutes
                  </p>
                </div>
              </div>
            )}

            {/* Show saved reminder */}
            {savedReminder && (
              <div className="bg-green-100 rounded-lg p-4 sm:p-6 mb-8 border-l-4 border-green-600">
                <h3 className="font-poppins font-bold text-base sm:text-lg lg:text-xl text-green-700 mb-3">
                  Reminder Saved ✅
                </h3>
                <div className="space-y-2 text-sm sm:text-base text-green-800">
                  <p>
                    <span className="font-semibold">Medication:</span>{" "}
                    {savedReminder.medication}
                  </p>
                  <p>
                    <span className="font-semibold">Dose:</span>{" "}
                    {savedReminder.dose}
                  </p>
                  <p>
                    <span className="font-semibold">Frequency:</span>{" "}
                    {savedReminder.frequency}
                  </p>
                  <p>
                    <span className="font-semibold">Time of Day:</span>{" "}
                    {savedReminder.timeOfDay}
                  </p>
                  <p>
                    <span className="font-semibold">Exact Time:</span>{" "}
                    {savedReminder.time}
                  </p>
                  <p>
                    <span className="font-semibold">Snooze:</span>{" "}
                    {savedReminder.snoozeMinutes} minutes
                  </p>
                </div>
              </div>
            )}

            {/* Save button */}
            {!savedReminder && (
              <div className="flex justify-center pb-6">
                <button
                  onClick={handleSave}
                  className="px-8 py-3 sm:px-12 sm:py-4 lg:px-16 lg:py-5 bg-gradient-to-r from-insulock-primary-light to-insulock-primary text-white font-scada font-bold text-base sm:text-lg lg:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomTabBar />
    </div>
  );
}

