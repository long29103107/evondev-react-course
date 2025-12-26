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
        setMovies(data.results);
    }, [data]);
    
    return (
        <div className="movie-list">
            <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MovieList;