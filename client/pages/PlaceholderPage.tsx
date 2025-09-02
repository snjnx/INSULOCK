import { useNavigate } from "react-router-dom";
import { ArrowLeft, Construction } from "lucide-react";
import BottomTabBar from "../components/BottomTabBar";

interface PlaceholderPageProps {
  title: string;
  description?: string;
  backRoute?: string;
}

export default function PlaceholderPage({ 
  title = "Feature Coming Soon", 
  description = "This feature is being developed and will be available soon. Continue prompting to have it implemented!",
  backRoute = "/dashboard"
}: PlaceholderPageProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(backRoute);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-insulock-light-blue to-insulock-primary px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="flex items-center">
          <button
            onClick={handleBack}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mr-4 hover:bg-gray-50 transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-insulock-primary" />
          </button>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold font-scada text-white">
            {title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-md">
          {/* Construction icon */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-insulock-background-blue rounded-full flex items-center justify-center mx-auto mb-8">
            <Construction className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-insulock-primary" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins text-black mb-4">
            Coming Soon!
          </h2>

          <p className="text-base sm:text-lg lg:text-xl font-poppins text-gray-600 mb-8">
            {description}
          </p>

          <button
            onClick={handleBack}
            className="px-8 py-3 sm:px-10 sm:py-4 lg:px-12 lg:py-5 bg-gradient-to-r from-insulock-primary-light to-insulock-primary text-white font-scada font-bold text-base sm:text-lg lg:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomTabBar />
    </div>
  );
}
