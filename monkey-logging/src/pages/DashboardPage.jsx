import DashboardHeading from '@/module/dashboard/DashboardHeading';
import { useEffect } from 'react';

const DashboardPage = () => {
  useEffect(() => {
    document.title = 'Dashboard | Monkey Blogging';
  }, []);
  return (
    <div>
      <DashboardHeading title="Dashboard" desc="Overview dashboard monitor" />
    </div>
  );
};

export default DashboardPage;
