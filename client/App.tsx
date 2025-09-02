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
import NotFound from "./pages/NotFound";

import RemindersProvider from "./pages/RemainderContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RemindersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-medication" element={<AddMedication />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </RemindersProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
