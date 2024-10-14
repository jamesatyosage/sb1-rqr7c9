import React, { useState, useEffect } from 'react';

const QuestionPrompts = ({ sentiment }) => {
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    if (sentiment < -0.2) {
      setPrompt("Can you tell me more about what makes you feel this way?");
    } else if (sentiment > 0.2) {
      setPrompt("It sounds like you're feeling positive about this. Can we explore that further?");
    } else {
      setPrompt("How would you describe your feelings about this situation?");
    }
  }, [sentiment]);

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">AI Question Prompt</h2>
      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4">
        <p>{prompt}</p>
      </div>
    </div>
  );
};

export default QuestionPrompts;