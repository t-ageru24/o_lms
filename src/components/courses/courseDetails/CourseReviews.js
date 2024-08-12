import React, { useState } from 'react';

function CourseReviews() {
  const [reviews, setReviews] = useState([
    { name: 'Esmael M.', rating: 5, comment: 'Great course! Highly recommend.' },
    { name: 'Meba ', rating: 4, comment: 'Very informative and well structured.' },
  ]);

  const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.comment) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: '', rating: 0, comment: '' });
    }
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Course Reviews</h2>
      
      <div className="grid grid-cols-1 gap-8 mb-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
            <p className="text-yellow-500 mb-2">{'★'.repeat(review.rating)}</p>
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

        <select 
          name="rating" 
          value={newReview.rating} 
          onChange={handleInputChange} 
          className="w-full mb-4 p-4 border rounded-md" 
          required
        >
          <option value="0">Select Rating</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>

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


// // src/components/courses/CourseReviews.js
// import React from 'react';

// function CourseReviews() {
//     return (
//         <section>
//             <h2 className="text-xl font-bold mb-4">Reviews</h2>
//             <div className="space-y-4">
//                 <div className="border p-4 rounded-lg">
//                     <p>"This course was amazing! I learned so much."</p>
//                     <p className="text-sm text-gray-600">- John Doe</p>
//                 </div>
//                 <div className="border p-4 rounded-lg">
//                     <p>"A great introduction to web development."</p>
//                     <p className="text-sm text-gray-600">- Jane Smith</p>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default CourseReviews;
