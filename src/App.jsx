import React, { useState } from 'react';
import Transcription from './components/Transcription';
import SentimentAnalysis from './components/SentimentAnalysis';
import QuestionPrompts from './components/QuestionPrompts';

function App() {
  const [transcript, setTranscript] = useState('');
  const [sentiment, setSentiment] = useState(0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Therapy Co-Pilot</h1>
      <Transcription setTranscript={setTranscript} setSentiment={setSentiment} />
      <SentimentAnalysis sentiment={sentiment} />
      <QuestionPrompts sentiment={sentiment} />
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Transcript</h2>
        <p>{transcript}</p>
      </div>
    </div>
  );
}

export default App;