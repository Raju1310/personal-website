import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text, wordsPerMinute,c }) => {
  const [visibleText, setVisibleText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const typingSpeed = (60 / wordsPerMinute) * 60; // Calculate milliseconds per character

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setVisibleText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);

      return () => {
        clearTimeout(timer);
      };
    } else {
      // If the end of the text is reached, reset the text and currentIndex
      setTimeout(() => {
        setVisibleText('');
        setCurrentIndex(0);
      }, 1000); // You can adjust the time before resetting
    }
  }, [text, currentIndex, wordsPerMinute]);

  return (
    <div>
      <p className={c}>
        {visibleText}
        <span className="cublinking-cursor">|</span>
      </p>
    </div>
  );
};

export default TypingAnimation;
