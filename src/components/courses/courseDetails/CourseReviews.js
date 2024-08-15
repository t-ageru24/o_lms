import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function CourseReviews() {
  const [reviews, setReviews] = useState([
    { name: 'Esmael M.', rating: 5, comment: 'Great course! Highly recommend.' },
    { name: 'Meba', rating: 4, comment: 'Very informative and well structured.' },
  ]);

  const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' });
  const [hoverRating, setHoverRating] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleRatingClick = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.comment) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: '', rating: 0, comment: '' });
      setHoverRating(0);
    }
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Course Reviews</h2>
      
      <div className="grid grid-cols-1 gap-8 mb-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
            <div className="flex items-center mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-yellow-500 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  />
                ))}
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md max-w-xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Leave a Review</h3>

        <input 
          type="text" 
          name="name" 
          value={newReview.name} 
          onChange={handleInputChange} 
          placeholder="Your Name" 
          className="w-full mb-4 p-4 border rounded-md"
          required
        />

        <div className="flex items-center mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaStar
                key={i}
                className={`cursor-pointer text-3xl ${i < (hoverRating || newReview.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                onClick={() => handleRatingClick(i + 1)}
                onMouseEnter={() => setHoverRating(i + 1)}
                onMouseLeave={() => setHoverRating(0)}
              />
            ))}
        </div>

        <textarea 
          name="comment" 
          value={newReview.comment} 
          onChange={handleInputChange} 
          placeholder="Your Review" 
          className="w-full mb-4 p-4 border rounded-md h-32"
          required
        ></textarea>

        <button 
          type="submit" 
          className="w-full px-4 py-2 bg-[#44318D] text-white rounded-md font-semibold"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default CourseReviews;
