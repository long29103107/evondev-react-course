import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '@/redux-toolkit/globalSlice';

const SwitchDarkMode = () => {
    const darkMode = useSelector((state) => state.global.darkMode);
    const dispatch = useDispatch();
    if (darkMode) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
  
    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", !darkMode);
        dispatch(toggleDarkMode(!darkMode));
    };
  
    return (
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-md cursor-pointer
                   bg-slate-200 dark:bg-slate-800
                   text-black dark:text-white"
      >
        Toggle Theme
      </button>
    );
  };

  export default SwitchDarkMode;