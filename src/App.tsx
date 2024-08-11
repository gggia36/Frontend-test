import { Route, Routes } from "react-router-dom";
import AnswerLayout from "./pages/answerLayout";
import Index from "./pages/home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/answerLayout" element={<AnswerLayout />} />
      </Routes>
    </>
  );
}

export default App;
