import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  words: string[];
  speed?: number;
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ 
  words, 
  speed = 100,
  className = ""
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      // Deleting effect
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
      
      const timer = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, speed / 2);
      
      return () => clearTimeout(timer);
    } else {
      // Typing effect
      if (currentText === currentWord) {
        // Pause at the end before deleting
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1200);
        
        return () => clearTimeout(timer);
      }
      
      const timer = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      }, speed * 0.6);
      
      return () => clearTimeout(timer);
    }
  }, [currentText, isDeleting, currentWordIndex, words, speed]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingEffect; 