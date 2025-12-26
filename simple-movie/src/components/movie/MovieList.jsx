import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/css";
import useSWR from "swr";
import { fetcher } from "@/config";
import { useState, useEffect } from "react";

//https://api.themoviedb.org/3/movie/now_playing?api_key=405def94fe2b3f0e43afd7cc55071ef8

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/movie/now_playing?api_key=405def94fe2b3f0e43afd7cc55071ef8`, fetcher)

    useEffect(() => {
        if (data && data.results) setMovies(data.results);
    }, [data]);
    
    return (
        <div className="movie-list">
            <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
                {movies.length > 0 && movies.map((item) => (
                    <SwiperSlide key={item.id}>
                        <MovieCard item={item}></MovieCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieList;