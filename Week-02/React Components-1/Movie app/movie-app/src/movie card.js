import React from 'react';
import './Movie.css';

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Lagaan Movie',
      plot: 'Super hit movie',
      price: '299',
      rating: '8.9',
      starCount: 0,
      isFavourite: false,  // New state variable for the favorite status
      isAddedToCart: false, // New state variable to track if the movie is added to the cart
    };
  }

  incrementStars = () => {
    this.setState((prevState) => {
      if (prevState.starCount < 5) {
        return { starCount: prevState.starCount + 1 };
      }
      return prevState;
    });
  };

  decrementStars = () => {
    this.setState((prevState) => {
      if (prevState.starCount > 0) {
        return { starCount: prevState.starCount - 1 };
      }
      return prevState;
    });
  };

  toggleFavourite = () => {
    this.setState((prevState) => ({
      isFavourite: !prevState.isFavourite,
    }));
  };

  addToCart = () => {
    this.setState({ isAddedToCart: true });
    console.log(`${this.state.title} added to cart.`);
  };

  render() {
    const { title, plot, price, rating, starCount, isFavourite, isAddedToCart } = this.state;

    return (
      <>
        <div className='main-div'>
          <div className='movie-card'>
            <div className='left-side'>
              <img
                src='https://ashbhardwaj.files.wordpress.com/2010/07/lagaanab9.jpg'
                alt='Lagaan poster'
              />
            </div>

            <div className='right-side'>
              <div className='title'>{title}</div>
              <div className='plot'>{plot}</div>
              <div className='price'>Rs. {price}</div>

              <div className='footer'>
                <div className='rating'>{rating}</div>
                <div className='star-dis'>
                  <div className='subtraction-icon' onClick={this.decrementStars}>
                    <img src='https://cdn-icons-png.flaticon.com/128/43/43625.png' alt='Decrement' />
                  </div>
                  <div className='star'>
                    <img src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png' alt='Star' />
                  </div>
                  <div className='addition-icon' onClick={this.incrementStars}>
                    <img src='https://cdn-icons-png.flaticon.com/128/20/20183.png' alt='Increment' />
                  </div>
                  <span className='star-count'>{starCount}</span>
                </div>
                <div className='button-div'>
                  <button
                    className='favourite-btn'
                    style={{
                      backgroundColor: isFavourite ? 'green' : 'red',
                      color: 'white',
                    }}
                    onClick={this.toggleFavourite}
                  >
                    {isFavourite ? 'Favourite' : 'Unfavourite movie'}
                  </button>
                  <button 
                    className='card-btn' 
                  
                    onClick={this.addToCart}
                    disabled={isAddedToCart}
                  >
                    {isAddedToCart ? 'Remove From Card' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MovieCard;
