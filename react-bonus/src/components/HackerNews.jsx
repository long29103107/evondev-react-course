import React, { useEffect } from 'react'
import { useNewsStore } from '../store/news-store'

const HackerNews = () => {
  const{ fetchNews, isLoading, hits } = useNewsStore((state) => state);
  
  useEffect(() => {
    fetchNews();
  }, []);
  
  return (
    <div className="p-5 bg-white rounded-lg max-w-lg mx-auto">
      {isLoading && (
        <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
      )}
  
      {!isLoading &&
        hits.length > 0 &&
        hits.map((item) => <div key={item.objectID}>{item.story_title}</div>)}
    </div>
  );
}

export default HackerNews



///<div key={item.objectID}>{item.title}</div>