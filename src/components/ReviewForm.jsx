import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { 
  AcademicCapIcon, // Professional
  HeartIcon, // Enthusiastic
  ChatBubbleBottomCenterTextIcon, // Casual
  ClipboardDocumentListIcon, // Detailed
  BarsArrowDownIcon, // Short
  Bars2Icon, // Medium
  Bars3Icon, // Long
} from '@heroicons/react/24/outline';

const languageStyles = [
  { 
    id: 'professional', 
    name: 'Professional',
    icon: AcademicCapIcon,
    description: 'Formal and business-appropriate'
  },
  { 
    id: 'casual', 
    name: 'Casual',
    icon: ChatBubbleBottomCenterTextIcon,
    description: 'Relaxed and conversational'
  },
  { 
    id: 'enthusiastic', 
    name: 'Enthusiastic',
    icon: HeartIcon,
    description: 'Excited and energetic'
  },
  { 
    id: 'detailed', 
    name: 'Detailed',
    icon: ClipboardDocumentListIcon,
    description: 'Comprehensive and thorough'
  },
];

const reviewLengths = [
  { 
    id: 'short', 
    name: 'Short', 
    icon: BarsArrowDownIcon,
    description: '2-3 concise sentences'
  },
  { 
    id: 'medium', 
    name: 'Medium', 
    icon: Bars2Icon,
    description: '4-6 balanced sentences'
  },
  { 
    id: 'long', 
    name: 'Long', 
    icon: Bars3Icon,
    description: '7+ detailed sentences'
  },
];

function ReviewForm() {
  const [rating, setRating] = useState(5);
  const [languageStyle, setLanguageStyle] = useState('professional');
  const [reviewLength, setReviewLength] = useState('medium');
  const [staffName, setStaffName] = useState('');
  const [generatedReview, setGeneratedReview] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate AI generation delay
    setTimeout(() => {
      const dummyReviews = {
        professional: "I had an excellent experience at this establishment. The service provided by [staff] was exceptional, demonstrating great attention to detail and professionalism. The quality of service exceeded my expectations.",
        casual: "Really enjoyed my time here! [staff] was super helpful and made sure everything was just right. The whole experience was great and I'd definitely come back!",
        enthusiastic: "WOW! This place is absolutely amazing! [staff] went above and beyond to make my experience unforgettable. I can't wait to come back and would recommend this to everyone!",
        detailed: "I was thoroughly impressed with my recent visit. [staff] provided outstanding service, paying attention to every detail. The level of professionalism and expertise demonstrated was remarkable. The entire experience was seamless and enjoyable."
      };

      let review = dummyReviews[languageStyle];
      if (staffName) {
        review = review.replace('[staff]', staffName);
      } else {
        review = review.replace('[staff]', 'the staff');
      }

      setGeneratedReview(review);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Generate Your Review</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rating Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Rating
          </label>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                className={`h-8 w-8 cursor-pointer ${
                  star <= rating ? 'text-yellow-400' : 'text-gray-200'
                }`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
        </div>

        {/* Language Style */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Review Style
          </label>
          <div className="grid grid-cols-2 gap-4">
            {languageStyles.map((style) => {
              const Icon = style.icon;
              return (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => setLanguageStyle(style.id)}
                  className={`${
                    languageStyle === style.id
                      ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                  } flex flex-col items-center p-4 border-2 rounded-lg transition-all duration-200 ease-in-out`}
                >
                  <Icon className={`h-6 w-6 mb-2 ${
                    languageStyle === style.id ? 'text-indigo-600' : 'text-gray-400'
                  }`} />
                  <span className="font-medium text-sm">{style.name}</span>
                  <span className="text-xs text-gray-500 mt-1 text-center">
                    {style.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Review Length */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Review Length
          </label>
          <div className="grid grid-cols-3 gap-4">
            {reviewLengths.map((length) => {
              const Icon = length.icon;
              return (
                <button
                  key={length.id}
                  type="button"
                  onClick={() => setReviewLength(length.id)}
                  className={`${
                    reviewLength === length.id
                      ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                  } flex flex-col items-center p-4 border-2 rounded-lg transition-all duration-200 ease-in-out`}
                >
                  <Icon className={`h-6 w-6 mb-2 ${
                    reviewLength === length.id ? 'text-indigo-600' : 'text-gray-400'
                  }`} />
                  <span className="font-medium text-sm">{length.name}</span>
                  <span className="text-xs text-gray-500 mt-1 text-center">
                    {length.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Staff Member Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Staff Member Name (Optional)
          </label>
          <input
            type="text"
            value={staffName}
            onChange={(e) => setStaffName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Who served you?"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isGenerating}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isGenerating
                ? 'bg-indigo-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {isGenerating ? 'Generating Review...' : 'Generate Review'}
          </button>
        </div>

        {/* Generated Review */}
        {generatedReview && (
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Generated Review
            </label>
            <div className="bg-gray-50 rounded-md p-4">
              <p className="text-gray-800">{generatedReview}</p>
            </div>
            <div className="mt-4 flex space-x-4">
              <button
                type="button"
                className="flex-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Post to Google Reviews
              </button>
              <button
                type="button"
                onClick={() => setGeneratedReview('')}
                className="flex-1 flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Generate Another
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default ReviewForm;
