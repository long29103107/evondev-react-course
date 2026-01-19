import DashboardHeading from '@/module/dashboard/DashboardHeading';
import usePageTitle from '@/hooks/usePageTitle';

const DashboardPage = () => {
  usePageTitle('Dashboard | Monkey Blogging');
  return (
    <div>
      <DashboardHeading title="Dashboard" desc="Overview dashboard monitor" />
    </div>
  );
};

export default DashboardPage;
