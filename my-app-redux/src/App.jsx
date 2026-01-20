import './styles/tailwind.css';
import Card from '@/components/Card';
import SwitchDarkMode from '@/components/SwitchDarkMode';

const App = () => {
  return (
    <div className="min-h-screen">
      <Card />
      <SwitchDarkMode />
    </div>
  )
}

export default App;
