import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  `
  inline-flex items-center justify-center gap-3
  whitespace-nowrap
  rounded-xl
  text-base font-semibold
  transition-transform duration-300
  hover:scale-110 hover:cursor-pointer
  disabled:pointer-events-none disabled:opacity-50
  [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0
  outline-none
  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
  aria-invalid:ring-destructive/20 aria-invalid:border-destructive
  dark:aria-invalid:ring-destructive/40
  `,
  {
    variants: {
      variant: {
        primary: 'bg-primary text-button-text shadow-md',
        secondary: 'bg-tertiary text-paragraph shadow-md',
        ghost: 'group hover:text-primary',
        overlay:
          ' border-paragraph flex w-fit flex-row rounded-md border font-bold'
      },
      size: {
        none: 'text-base',
        base: 'text-base px-7 py-4 has-[>svg]:px-5',
        sm: 'text-xs px-5 py-2 desktop:text-sm'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base'
    }
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
