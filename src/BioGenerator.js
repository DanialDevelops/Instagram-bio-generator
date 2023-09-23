import React, { useState } from 'react';
import axios from 'axios';

const BioGenerator = () => {
  const [generatedBio, setGeneratedBio] = useState('');

  const generateBio = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci/completions',
        {
          prompt: 'Write an Instagram Bio for a user that enjoys playing basketball and lives in toronto, keep the tone casual.',
          max_tokens: 50, // Adjust this value as needed
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );
      setGeneratedBio(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={generateBio}>Generate Bio</button>
      <p>{generatedBio}</p>
    </div>
  );
};

export default BioGenerator;