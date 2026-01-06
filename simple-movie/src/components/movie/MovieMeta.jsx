import React from 'react'
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, tmdbAPI } from '@/apiConfig/config';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from '@/components/movie/MovieCard';

const MovieMeta = ({ type = 'videos' }) => {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, type), fetcher);
    if (!data) return null;
  
    if (type === 'credits') 
    {
      const { cast } = data;
      if (!cast || cast.length <= 0) return null;
  
      return (
        <div className="py-10">
          <h2 className="text-3xl mb-10 text-center">Casts</h2>
          <div className="grid grid-cols-4 gap-5">
            {cast.slice(0, 4).map((actor) => (
              <div className="cast-item" key={actor.id}>
                <img
                  src={tmdbAPI.imageOriginal(actor.profile_path)}
                  alt={actor.name}
                  className="w-full h-full object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-medium text-white">{actor.name}</h3>
              </div>
            ))}
          </div>
        </div>
      );
    }
    else 
    {
      const { results } = data;
      if (!results || results.length <= 0) return null;
  
      if (type === 'videos') {
        return (
          <div className="py-10">
            <div className="grid grid-col gap-10">
              {results.slice(0, 2).map((video) => (
                <div key={video.id} className="">
                  <h3 className="text-xl font-medium bg-secondary p-3 mb-5 inline-block">
                    {video.name}
                  </h3>
                  <div className="w-full aspect-video">
                    <iframe
                      width={860}
                      height={486}
                      src={`https://www.youtube.com/embed/${video.key}`}
                      title={video.name}
                      className="w-full h-full object-cover"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }
      else if (type === 'similar')
      {
        return (
          <div className="py-10">
            <h2 className="text-3xl mb-10 font-medium">Similar Movies</h2>
            <div className="movie-list">
              <Swiper grabCursor spaceBetween={40} slidesPerView="auto">
                {results.map((item) => (
                  <SwiperSlide key={item.id}>
                    <MovieCard item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        );
      }
      return <></>;
    }
  };

export default MovieMeta