import { useRoutes } from 'react-router-dom';
import { AuthProvider } from '@/contexts/auth-context';
import { appRoutes } from '@/routes';

function App() {
  const routes = useRoutes(appRoutes);

  return <AuthProvider>{routes}</AuthProvider>;
}

export default App;
