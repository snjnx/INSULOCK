import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/features");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      {/* Header with logo and branding */}
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl flex flex-col items-center mb-8 lg:mb-12">
        {/* INSULOCK Logo with Syringe */}
        <div className="flex items-center mb-4 lg:mb-6">
          <div className="w-20 h-20 lg:w-28 lg:h-28 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center mr-4 lg:mr-6">
            {/* Stylized syringe icon */}
            <svg className="w-12 h-12 lg:w-16 lg:h-16 text-insulock-primary" viewBox="0 0 50 50">
              <path 
                d="M35 15L45 5L40 0L30 10L25 5L20 10L30 20L35 15Z" 
                fill="currentColor" 
                className="opacity-80"
              />
              <rect 
                x="15" 
                y="20" 
                width="25" 
                height="6" 
                rx="3" 
                fill="currentColor"
                transform="rotate(45 27.5 23)"
              />
              <circle 
                cx="12" 
                cy="35" 
                r="4" 
                fill="currentColor"
                className="opacity-60"
              />
            </svg>
          </div>
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-medium font-poppins text-black">
              INSULOCK
            </h1>
          </div>
        </div>
        
        {/* Tagline */}
        <p className="text-center text-sm lg:text-base font-inter font-light text-gray-800 px-4">
          LOCKING IN THE RIGHT DOSE AT THE RIGHT TIME
        </p>
        
        {/* Divider line */}
        <div className="w-full h-px bg-black mt-4"></div>
      </div>

      {/* Medical illustration */}
      <div className="w-full max-w-lg lg:max-w-2xl mb-12 lg:mb-16 px-4">
        <div className="relative">
          {/* Doctor illustration placeholder */}
          <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center">
            {/* Stylized medical scene */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Doctor figure */}
              <div className="absolute left-8 bottom-8">
                <div className="w-24 h-32 bg-gradient-to-b from-blue-100 to-blue-200 rounded-t-full"></div>
                <div className="w-20 h-16 bg-blue-300 rounded-full mx-auto -mt-4"></div>
                <div className="w-16 h-12 bg-pink-200 rounded-full mx-auto -mt-6"></div>
              </div>
              
              {/* Medical charts/data visualization */}
              <div className="absolute right-8 top-8 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex space-x-2">
                  <div className="w-16 h-16 bg-insulock-primary rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full opacity-80"></div>
                  </div>
                  <div className="w-16 h-16 bg-purple-400 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
                  </div>
                </div>
              </div>
              
              {/* Medical equipment */}
              <div className="absolute bottom-16 right-16">
                <div className="w-12 h-20 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full max-w-md lg:max-w-lg text-center mb-12 lg:mb-16">
        <h2 className="text-2xl lg:text-3xl font-bold font-inter text-black mb-4 lg:mb-6">
          Never Miss a Dose Again!
        </h2>
        <p className="text-sm lg:text-base font-medium font-inter text-black px-8">
          Track your insulin, set reminders, and stay healthy with ease.
        </p>
      </div>

      {/* Get Started Button */}
      <button
        onClick={handleGetStarted}
        className="px-8 py-3 lg:px-10 lg:py-4 bg-gradient-to-r from-insulock-primary-light to-insulock-primary text-white font-bold font-inter text-lg lg:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
      >
        Get Started
      </button>
    </div>
  );
}
