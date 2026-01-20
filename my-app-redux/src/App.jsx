import './styles/tailwind.css';
import SideBar from '@/components/SideBar';
import ButtonToggle from '@/components/ButtonToggle';

const App = () => {
  return (
    <div className="min-h-screen">
      <SideBar />
      <ButtonToggle />
    </div>
  )
}

export default App;
