// RemindersContext.tsx
import { createContext, useContext, useState, useEffect } from "react";

type Reminder = {
  id: string;
  medication: string;
  dosage: string;
  time: string;
};

type RemindersContextType = {
  reminders: Reminder[];
  addReminder: (reminder: Reminder) => void;
};

const RemindersContext = createContext<RemindersContextType | null>(null);

export default function RemindersProvider({ children }: { children: React.ReactNode }) {
  const [reminders, setReminders] = useState<Reminder[]>(() => {
    const saved = localStorage.getItem("reminders");
    return saved ? JSON.parse(saved) : [];
  });

  const addReminder = (reminder: Reminder) => {
    const updated = [...reminders, reminder];
    setReminders(updated);
    localStorage.setItem("reminders", JSON.stringify(updated));
  };

  return (
    <RemindersContext.Provider value={{ reminders, addReminder }}>
      {children}
    </RemindersContext.Provider>
  );
}

export const useReminders = () => {
  const ctx = useContext(RemindersContext);
  if (!ctx) throw new Error("useReminders must be inside RemindersProvider");
  return ctx;
};
