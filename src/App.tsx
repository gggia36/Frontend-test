import { Route, Routes } from "react-router-dom";
import AnswerLayout from "./pages/answerLayout";
import AnswerSPA from "./pages/answerSPA";
import Index from "./pages/home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/answerLayout" element={<AnswerLayout />} />
        <Route path="/answerSPA" element={<AnswerSPA />} />
      </Routes>
    </>
  );
}

export default App;
