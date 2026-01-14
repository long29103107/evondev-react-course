import { useRoutes } from 'react-router-dom';
import { appRoutes } from '@/routes/routes.config';

const AppRoutes = () => useRoutes(appRoutes);
export default AppRoutes;