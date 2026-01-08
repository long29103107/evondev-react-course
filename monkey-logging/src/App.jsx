import { AuthProvider } from "@/contexts/auth-context";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
