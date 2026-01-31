'use client';
import React from 'react';
import styles from './infinite-logo-slider.module.css';

interface InfiniteLogoSliderProps {
  speed?: number;
  className?: string;
  children: React.ReactNode;
}

const InfiniteLogoSlider = ({
  speed = 80,
  className = '',
  children
}: InfiniteLogoSliderProps) => {
  const duration = `${2000 / speed}s`;

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        className={styles['animate-infinite-scroll']}
        style={
          {
            '--animation-duration': duration
          } as React.CSSProperties
        }
      >
        <div className='flex shrink-0 gap-32 pr-32'>{children}</div>
        <div className='flex shrink-0 gap-32 pr-32' aria-hidden='true'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoSlider;
