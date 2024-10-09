import React from 'react';
import './MoviePage.css'; // Ensure this path is correct

const MoviePage = () => {
  const movieTitle = "Inception";
  const movieDescription = "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious.";
  
  const reviews = [
    { id: 1, reviewer: "John Doe", comment: "An incredible journey through dreams!" },
    { id: 2, reviewer: "Jane Smith", comment: "Mind-bending and visually stunning." },
    { id: 3, reviewer: "Alex Brown", comment: "A masterpiece of modern cinema." },
  ];

  return (
    <div className="movie-page">
      <h1 className="movie-title">{movieTitle}</h1>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YoHD9XEInc0"  // Sample video link
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="movie-description">{movieDescription}</p>
      <h2>Reviews</h2>
      <div className="reviews">
        {reviews.map(review => (
          <div key={review.id} className="review">
            <h3 className="reviewer">{review.reviewer}</h3>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
