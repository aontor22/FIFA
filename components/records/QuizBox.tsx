
'use client';

import { useState } from 'react';

export default function QuizBox() {
  const [message, setMessage] = useState('');
  function answer(value: string) {
    setMessage(value === 'Brazil' ? 'Correct. Brazil has five titles.' : 'Not quite. Brazil leads with five titles.');
  }
  return (
    <article className="record-card quiz-card">
      <h3>Quick quiz</h3>
      <p>Who has won the most men’s World Cups?</p>
      <div className="quiz-options">
        {['Brazil', 'Germany', 'Argentina'].map((item) => <button key={item} onClick={() => answer(item)}>{item}</button>)}
      </div>
      {message && <strong className="quiz-answer">{message}</strong>}
    </article>
  );
}
