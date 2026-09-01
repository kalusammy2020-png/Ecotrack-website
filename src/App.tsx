import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Schedule } from "./pages/Schedule";
import { RecyclingMap } from "./pages/RecyclingMap";
import { Tracker } from "./pages/Tracker";
import { Toaster } from "./components/ui/sonner";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/recycling" element={<RecyclingMap />} />
            <Route path="/tracker" element={<Tracker />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
}

export default App;
