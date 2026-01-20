import './styles/tailwind.css';
import HackerNews from '@/components/HackerNew';
import { takeEvery } from 'redux-saga/effects';
import { fetchData } from '@/redux-toolkit/saga';
import { useEffect } from 'react';

const App = () => {



  useEffect(() => {
    function* demoSaga() {
      yield takeEvery('FETCH_DATA', fetchData);
    }
  }, []);

  return (
    <div>
      <HackerNews />
    </div>
  )
}

export default App;
