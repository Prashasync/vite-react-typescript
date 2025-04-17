import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Splash Screens
import SplashScreen from "./components/SplashScreens/SplashScreen";
import SplashScreen1 from "./components/SplashScreens/SplashScreen1";
import SplashScreen2 from "./components/SplashScreens/SplashScreen2";
import SplashScreen3 from "./components/SplashScreens/SplashScreen3";

// Main Screens
import HomeScreen from "./components/HomeScreenPage/HomeScreen";
import Dashboard from "./components/DashboardScreen/dashboard";
import AppointmentPage from "./components/AppointmentsPage/AppointmentPage";
import "./shared/styles/App.css";
import Otp from "./features/otp/pages/Otp";
import Chat from "./features/chat/pages/Chat";
import Login from "./features/auth/pages/Login.tsx";
import Register from "./features/auth/pages/Register";
import Onboarding from "./features/onboarding/pages/Onboarding";
import ForgotPassword from "./features/auth/pages/ForgotPassword";
import KidTimeLine from "./features/milestones/pages/KidTimeLine";
import MilestoneList from "./features/milestones/pages/MilestoneList";
import MessageDisplay from "./features/chat/pages/MessageDisplay";
import CauseOfEmotion from "./features/symptomTracker/pages/CauseOfEmotions";
import NotesForEmotions from "./features/symptomTracker/pages/NotesForEmotions";
import EmotionQuestionare from "./features/symptomTracker/pages/EmotionQuestionare";
import SymptomTracker from "./features/symptomTracker/pages/SymptomTracker";
import RecordAVoiceNote from "./features/symptomTracker/pages/RecordAVoiceNote";

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Router>
        <Routes>
          {/* Splash Screens */}
          <Route path="/" element={<SplashScreen />} />
          <Route path="/splashscreen1" element={<SplashScreen1 />} />
          <Route path="/splashscreen2" element={<SplashScreen2 />} />
          <Route path="/splashscreen3" element={<SplashScreen3 />} />

          {/* Main Screens */}
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<AppointmentPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/symptom-tracker" element={<SymptomTracker />} />
          <Route
            path="/symptom-tracker/questionare/1"
            element={<EmotionQuestionare />}
          />
          <Route
            path="/symptom-tracker/questionare/2"
            element={<CauseOfEmotion />}
          />
          <Route
            path="/symptom-tracker/questionare/3"
            element={<NotesForEmotions />}
          />
          <Route
            path="/symptom-tracker/questionare/4"
            element={<RecordAVoiceNote />}
          />
          <Route path="password-reset" element={<ForgotPassword />}></Route>
          <Route path="/chat" element={<Chat />} />
          <Route path="/messages/:id" element={<MessageDisplay />} />
          <Route path="/milestones" element={<MilestoneList />} />
          <Route path="/milestones/:title" element={<KidTimeLine />} />
          <Route
            path="*"
            element={<h1 style={{ textAlign: "center" }}>404 Not Found</h1>}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
