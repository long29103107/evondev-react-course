import { AuthProvider } from "@/contexts/auth-context";
import AppRoutes from "@/routes";

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
