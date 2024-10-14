import React from 'react';

const SentimentAnalysis = ({ sentiment }) => {
  const sentimentPercentage = ((sentiment + 1) * 50).toFixed(2); // Convert -1 to 1 range to 0 to 100

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Sentiment Analysis</h2>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${
            sentiment > 0 ? 'bg-green-600' : sentiment < 0 ? 'bg-red-600' : 'bg-yellow-600'
          }`}
          style={{ width: `${sentimentPercentage}%` }}
        ></div>
      </div>
      <p className="mt-2">
        Sentiment: {sentiment > 0 ? 'Positive' : sentiment < 0 ? 'Negative' : 'Neutral'}
        {' '}({sentimentPercentage}%)
      </p>
    </div>
  );
};

export default SentimentAnalysis;