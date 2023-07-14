// import React, { useState } from 'react';
// import { SentimentIntensityAnalyzer } from 'nltk.sentiment'; //

// const determineSentiment = (text) => {
//   const sia = new SentimentIntensityAnalyzer();
//   const result = sia.polarity_scores(text);

//   if (result['compound'] >= 0.05) {
//     return 'positive';
//   } else if (result['compound'] <= -0.05) {
//     return 'negative';
//   } else {
//     return 'neutral';
//   }
// };

// const SentimentAnalysis = () => {
//   const [inputText, setInputText] = useState('');
//   const [sentiment, setSentiment] = useState('');

//   const handleInputChange = (event) => {
//     setInputText(event.target.value);
//   };

//   const handleSentimentAnalysis = () => {
//     const result = determineSentiment(inputText);
//     setSentiment(result);
//   };

//   return (
//     <div>
//       <input type="text" value={inputText} onChange={handleInputChange} />
//       <button onClick={handleSentimentAnalysis}>Analyze Sentiment</button>
//       <p>Sentiment: {sentiment}</p>
//     </div>
//   );
// };

// export default SentimentAnalysis;

import React, { useState } from 'react';
import Sentiment from 'sentiment';

const SentimentAnalysis = () => {
  const [inputText, setInputText] = useState('');
  const [sentimentResult, setSentimentResult] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSentimentAnalysis = () => {
    if (inputText.trim() === '') {
      return;
    }

    const sentiment = new Sentiment();
    const result = sentiment.analyze(inputText);
    const sentimentValue = result.score;

    if (sentimentValue > 0) {
      setSentimentResult('positive');
    } else if (sentimentValue < 0) {
      setSentimentResult('negative');
    } else {
      setSentimentResult('neutral');
    }
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleSentimentAnalysis}>Analyze Sentiment</button>
      <p>Sentiment: {sentimentResult}</p>
    </div>
  );
};

export default SentimentAnalysis;