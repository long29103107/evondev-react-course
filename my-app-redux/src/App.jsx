import './styles/tailwind.css';
import { useDispatch } from 'react-redux';
import { getNews } from './sagas/news/newsSlice';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews('react'));
  }, [dispatch]);
  return (
    <div>
      <h1>Hacker News</h1>
    </div>
  )
}

export default App;
