'use client';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import styles from './flip-words.module.css';

export const FlipWords = ({
  words,
  duration = 3000,
  className
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsExiting(false);
      }, 500);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <div className={cn('relative inline-block', className)}>
      <span
        key={words[index]}
        className={cn(
          'inline-block',
          isExiting ? styles.wordOut : styles.wordIn
        )}
      >
        {words[index]}
      </span>
    </div>
  );
};
