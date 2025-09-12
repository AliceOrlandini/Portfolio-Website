'use client';
import React from 'react';

export interface InfiniteLogoSliderProps {
  speed?: number;
  className?: string;
  children: React.ReactNode;
}

interface State {
  contentWidth: number;
}

export default class InfiniteLogoSlider extends React.PureComponent<
  InfiniteLogoSliderProps,
  State
> {
  public static defaultProps: Partial<InfiniteLogoSliderProps> = {
    speed: 80 // px/s
  };

  private contentRef: HTMLDivElement | null = null;
  private animationFrame: number = 0;
  private lastTs: number = 0;
  private translateX: number = 0;

  constructor(props: InfiniteLogoSliderProps) {
    super(props);
    this.state = { contentWidth: 0 };
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      if (this.contentRef) {
        const fullSetWidth = this.contentRef.scrollWidth / 2 || 1;
        this.setState({ contentWidth: fullSetWidth }, this.startTicker);
      }
    });
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animationFrame);
    window.removeEventListener('resize', this.handleResize);
  }

  private handleResize = () => {
    if (this.contentRef) {
      const fullSetWidth = this.contentRef.scrollWidth / 2 || 1;
      this.setState({ contentWidth: fullSetWidth });
    }
  };

  private startTicker = () => {
    this.lastTs = performance.now();
    this.animationFrame = requestAnimationFrame(this.tick);
  };

  private tick = (ts: number) => {
    const { speed = 80 } = this.props;
    const dt = (ts - this.lastTs) / 1000; // in seconds
    this.lastTs = ts;

    this.translateX -= speed * dt;

    if (-this.translateX >= this.state.contentWidth) {
      this.translateX += this.state.contentWidth;
    }

    if (this.contentRef) {
      this.contentRef.style.transform = `translateX(${this.translateX}px)`;
    }

    this.animationFrame = requestAnimationFrame(this.tick);
  };

  render() {
    const { className, children } = this.props;
    const childArray = React.Children.toArray(children);
    const duplicated = childArray.concat(childArray);

    return (
      <div className={`w-full overflow-x-hidden ${className || ''}`.trim()}>
        <div
          ref={(el) => {
            this.contentRef = el;
          }}
          className='flex'
          style={{ willChange: 'transform' }}
        >
          {duplicated.map((child, idx) => (
            <div key={idx} className='mr-32 flex-shrink-0'>
              {child}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
