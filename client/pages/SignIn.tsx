import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    doctorId: "",
    password: ""
  });

  const handleBack = () => {
    navigate("/login");
  };

  const handleLogin = () => {
    // Handle login logic here
    navigate("/dashboard");
  };

  const handleContactAdmin = () => {
    // Handle contact admin action
    console.log("Contact administrator");
  };

  const handleForgotPassword = () => {
    // Handle forgot password
    console.log("Forgot password");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header illustration */}
      <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-blue-50 to-purple-100 relative overflow-hidden">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center z-10 hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-insulock-primary" />
        </button>

        {/* Illustration - medication tracking scene */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Tablet/screen showing medication info */}
          <div className="relative">
            <div className="w-80 h-48 bg-insulock-primary rounded-2xl border-4 border-gray-800 transform rotate-3 shadow-2xl">
              <div className="p-6 text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-lg opacity-20"></div>
                  <div className="flex-1">
                    <div className="w-full h-3 bg-white rounded opacity-30 mb-2"></div>
                    <div className="w-3/4 h-3 bg-white rounded opacity-20"></div>
                  </div>
                </div>
                
                {/* Medication bottle illustration */}
                <div className="absolute -right-8 top-8">
                  <div className="w-12 h-20 bg-red-400 rounded-t-lg border-2 border-gray-600">
                    <div className="w-8 h-3 bg-gray-600 rounded-t-lg mx-auto"></div>
                    <div className="mt-2 mx-2">
                      <div className="w-2 h-2 bg-white rounded-full mb-1"></div>
                      <div className="w-2 h-2 bg-white rounded-full mb-1"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* People figures */}
            <div className="absolute -left-20 bottom-0">
              <div className="w-12 h-20 bg-orange-400 rounded-t-full"></div>
              <div className="w-8 h-6 bg-pink-300 rounded-full mx-auto -mt-1"></div>
            </div>

            <div className="absolute -right-24 bottom-0">
              <div className="w-12 h-24 bg-red-400 rounded-t-full"></div>
              <div className="w-8 h-6 bg-pink-300 rounded-full mx-auto -mt-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Form section */}
      <div className="flex-1 bg-insulock-background-blue rounded-t-3xl -mt-8 relative z-10 px-6 py-8 sm:px-8 lg:px-10">
        <div className="max-w-md lg:max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold font-poppins text-black mb-2">
              Let's Log You in
            </h1>
            <p className="text-gray-600 font-poppins lg:text-lg">
              Welcome Back, Pick up where you left off!
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6 lg:space-y-8">
            {/* Doctor ID input */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Doctor ID /UHID"
                  value={formData.doctorId}
                  onChange={(e) => setFormData({...formData, doctorId: e.target.value})}
                  className="w-full px-4 py-3 lg:px-5 lg:py-4 bg-white border border-black rounded-lg font-poppins lg:text-lg focus:outline-none focus:ring-2 focus:ring-insulock-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Password input */}
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-4 py-3 lg:px-5 lg:py-4 bg-white border border-black rounded-lg font-poppins lg:text-lg focus:outline-none focus:ring-2 focus:ring-insulock-primary focus:border-transparent pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-gray-600 font-poppins hover:text-gray-800 transition-colors"
              >
                Forget password?
              </button>
            </div>

            {/* Login button */}
            <button
              type="button"
              onClick={handleLogin}
              className="w-full py-3 lg:py-4 bg-insulock-primary text-white font-scada text-lg lg:text-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Log in
            </button>

            {/* Contact admin */}
            <div className="text-center space-y-1">
              <p className="text-sm text-gray-600 font-scada italic">
                Don't have an account?
              </p>
              <button
                type="button"
                onClick={handleContactAdmin}
                className="text-sm text-gray-600 font-scada hover:text-gray-800 transition-colors"
              >
                contact your administrator
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
