import React from 'react';
import MovieCard from './movie card';


const MovieList = () => {
  // Sample list of movies
  const movies = [
    {
      title: 'Lagaan',
      plot: 'Super hit movie',
      price: '299',
      rating: '8.9',
      poster: 'https://ashbhardwaj.files.wordpress.com/2010/07/lagaanab9.jpg',
    },
    {
      title: '3 Idiots',
      plot: 'Inspirational comedy-drama',
      price: '399',
      rating: '9.0',
      poster: 'https://www.tallengestore.com/cdn/shop/products/3_Idiots_f8862ce4-4ead-4bc9-99b8-f35b92376712.jpg?v=1582192433',
    },
    {
      title: 'Inception',
      plot: 'A mind-bending thriller',
      price: '499',
      rating: '8.8',
      poster: 'https://m.media-amazon.com/images/I/61gz2gcfkAL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      title: 'The Dark Knight',
      plot: 'A gripping superhero tale',
      price: '599',
      rating: '9.0',
      poster: 'https://rukminim2.flixcart.com/image/850/1000/kzzw5u80/poster/o/g/b/large-dark-knight-joker-quote-movie-poster-print-poster-on-large-original-imagbvmyqpzhgqyz.jpeg?q=20&crop=false',
    },
  ];

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          plot={movie.plot}
          price={movie.price}
          rating={movie.rating}
          poster={movie.poster}
        />
      ))}
    </div>
  );
};

export default MovieList;
