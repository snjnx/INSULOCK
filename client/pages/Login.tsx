import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/signin");
  };

  const handleContactAdmin = () => {
    // Handle contact admin action
    console.log("Contact administrator");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with logo */}
      <div className="w-full flex flex-col items-center pt-8 pb-4 lg:pt-12 lg:pb-6">
        <div className="flex items-center mb-2">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center mr-3 lg:mr-4">
            <svg width="32" height="32" viewBox="0 0 32 32" className="text-insulock-primary">
              <path 
                d="M22 9L28 3L25 0L19 6L16 3L13 6L19 12L22 9Z" 
                fill="currentColor" 
                className="opacity-80"
              />
              <rect 
                x="9" 
                y="12" 
                width="16" 
                height="4" 
                rx="2" 
                fill="currentColor"
                transform="rotate(45 17 14)"
              />
              <circle 
                cx="8" 
                cy="22" 
                r="2.5" 
                fill="currentColor"
                className="opacity-60"
              />
            </svg>
          </div>
          <div className="text-center">
            <h1 className="text-2xl lg:text-3xl font-medium font-poppins text-black">
              INSULOCK
            </h1>
            <p className="text-sm lg:text-base font-poppins text-black">
              Insulin Dosage Tracker
            </p>
          </div>
        </div>
      </div>

      {/* Medical scene illustration */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg lg:max-w-2xl mb-8 lg:mb-12">
          {/* Medical professionals scene */}
          <div className="relative h-64 lg:h-80 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl overflow-hidden">
            {/* Background medical facility */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300"></div>
            </div>
            
            {/* Plant decoration */}
            <div className="absolute bottom-8 left-8">
              <div className="w-8 h-16 bg-green-400 rounded-t-full"></div>
              <div className="w-12 h-8 bg-gray-600 rounded-lg -mt-2"></div>
            </div>

            {/* Doctor figure (male) */}
            <div className="absolute bottom-0 left-16">
              <div className="w-16 h-24 bg-white rounded-t-2xl"></div>
              <div className="w-12 h-8 bg-pink-300 rounded-full mx-auto -mt-2"></div>
              <div className="w-14 h-6 bg-blue-500 mx-auto -mt-1 rounded-b-lg"></div>
            </div>

            {/* Doctor figure (female) */}
            <div className="absolute bottom-0 right-16">
              <div className="w-16 h-28 bg-white rounded-t-2xl"></div>
              <div className="w-12 h-8 bg-pink-300 rounded-full mx-auto -mt-2"></div>
              <div className="w-14 h-8 bg-blue-900 mx-auto -mt-1 rounded-b-lg"></div>
              <div className="w-20 h-12 bg-pink-200 rounded-full mx-auto -mt-4"></div>
            </div>

            {/* Heart with pulse line */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-16 bg-insulock-primary rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              {/* Pulse line */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Welcome card */}
        <div className="w-full max-w-md lg:max-w-lg bg-insulock-background-blue rounded-3xl p-8 lg:p-10 text-center">
          {/* Heart icon */}
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>

          <h2 className="text-xl lg:text-2xl font-bold font-poppins text-black mb-8 lg:mb-10">
            Take the right dose at the right time
          </h2>

          {/* Login button */}
          <button
            onClick={handleLogin}
            className="w-full max-w-xs mx-auto block px-8 py-3 lg:px-10 lg:py-4 bg-insulock-primary text-white font-scada text-lg lg:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 mb-4"
          >
            Log in
          </button>

          {/* Contact admin link */}
          <div className="text-center">
            <p className="text-sm text-gray-600 font-scada italic mb-1">
              Don't have an account?
            </p>
            <button
              onClick={handleContactAdmin}
              className="text-sm text-gray-600 font-scada hover:text-gray-800 transition-colors"
            >
              contact your administrator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
