import { AuthProvider } from "@/contexts/auth-context";
import AppRoutes from "@/routes";

const App1 = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App1;
