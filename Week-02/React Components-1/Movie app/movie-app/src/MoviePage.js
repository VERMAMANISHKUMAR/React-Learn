import React from "react";
import MovieCard from "./movie card"; // Import the MovieCard component

const MoviePage = () => {
  // Sample list of movies categorized by language
  const movies = {
          hindi: [
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
          ],
          english: [
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
          ],
          telugu: [
            {
              title: 'Baahubali: The Beginning',
              plot: 'Epic historical action film',
              price: '450',
              rating: '8.5',
              poster: 'https://api.time.com/wp-content/uploads/2015/07/baahubali-pic-2.jpg?quality=85&w=1200&h=628&crop=1',
            },
            {
              title: 'Arjun Reddy',
              plot: 'Romantic drama film',
              price: '300',
              rating: '8.2',
              poster: 'https://m.media-amazon.com/images/M/MV5BY2Y4ZDhmM2UtMWY0ZS00ODFmLTk2N2YtMDM1ZmQzYWI4ZDQ3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
            },
          ],
        };
  return (
    <div className="container mt-4">
      <section id="home">
        <h2>Latest Movie Launch</h2>
        <p>Welcome to MovieApp! Explore your favorite movies.</p>
        {/* Add latest movies here */}
        {movies.hindi.slice(0, 1).map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            plot={movie.plot}
            price={movie.price}
            rating={movie.rating}
            poster={movie.poster}
          />
        ))}
      </section>

      <section id="hindi-movies" className="mt-5">
        <h2>Hindi Movies</h2>
        <p>Discover the latest and greatest Hindi movies.</p>
        {movies.hindi.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            plot={movie.plot}
            price={movie.price}
            rating={movie.rating}
            poster={movie.poster}
          />
        ))}
      </section>

      <section id="english-movies" className="mt-5">
        <h2>English Movies</h2>
        <p>Browse through a collection of popular English movies.</p>
        {movies.english.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            plot={movie.plot}
            price={movie.price}
            rating={movie.rating}
            poster={movie.poster}
          />
        ))}
      </section>

      <section id="telugu-movies" className="mt-5">
        <h2>Telugu Movies</h2>
        <p>Find the best Telugu movies to watch today.</p>
        {movies.telugu.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            plot={movie.plot}
            price={movie.price}
            rating={movie.rating}
            poster={movie.poster}
          />
        ))}
      </section>
    </div>
  );
};

export default MoviePage;
