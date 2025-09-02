import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import AddMedication from "./pages/AddMedication";
import Profile from "./pages/Profile";
import Reminders from "./pages/Reminders";
import AddReminder from "./pages/AddReminder";
import AddReminderMedication from "./pages/AddReminderMedication";
import AddReminderStrength from "./pages/AddReminderStrength";
import AddReminderFrequency from "./pages/AddReminderFrequency";
import AddReminderTime from "./pages/AddReminderTime";
import AddReminderSetTime from "./pages/AddReminderSetTime";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-medication" element={<AddMedication />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/add-reminder" element={<AddReminder />} />
          <Route path="/add-reminder/medication" element={<AddReminderMedication />} />
          <Route path="/add-reminder/strength" element={<AddReminderStrength />} />
          <Route path="/add-reminder/frequency" element={<AddReminderFrequency />} />
          <Route path="/add-reminder/time" element={<AddReminderTime />} />
          <Route path="/add-reminder/set-time" element={<AddReminderSetTime />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
