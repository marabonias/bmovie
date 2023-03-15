import React from 'react'
import './card.css'
import MovieComponent from './MovieComponent';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    const handleFavouritesClick = props.handleFavouritesClick
    const MovieSelected = props.onMovieSelected

    return (
        <>
            { props.movies.map((movie, index) => (
                <MovieComponent key={index} movie={movie} favourite={FavouriteComponent} handleFavouritesClick={handleFavouritesClick}  onMovieSelected={MovieSelected}/>
            ))}
        </>
    );
}
export default MovieList;