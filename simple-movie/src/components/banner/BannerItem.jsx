import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@/components/button/Button';
import { tmdbAPI } from '@/apiConfig/config';

const BannerItem = ({ movie, genresList }) => {
    const {title, backdrop_path, genre_ids, id } = movie;
    const navigate = useNavigate();

    const genreNames = (!genre_ids || genre_ids.length <= 0) || (!genresList || genresList.length <= 0) 
      ? []
      : genresList.filter((genre) => genre_ids.includes(genre.id)).map((genre) => genre.name);
  
    return (
      <div className="w-full h-full rounded-lg relative">
        <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
  
        <img
          src={tmdbAPI.image500(backdrop_path)}
          alt="banner"
          className="w-full h-full object-cover rounded-lg object-top"
        />
  
        <div className="absolute left-5 bottom-5 w-full text-white">
          <h2 className="text-3xl font-bold mb-5">{title}</h2>
          {genreNames.length > 0 && <div className="flex items-center gap-x-3 mb-8">
            {genreNames.map((genreName) => (
              <span className="py-2 px-4 border border-white rounded-md" key={genreName}>
                {genreName}
              </span>
            ))}
          </div>}
          <Button onclick={() => navigate(`/movies/${id}`)}>Watch now</Button>
        </div>
      </div>
    );
  };

export default BannerItem;