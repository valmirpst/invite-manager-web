import { cn } from '@/lib/cn'
import { cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'icon'
  className?: string
}

const buttonVariants = cva(
  'text-blue not-disabled:hover:bg-blue cursor-pointer bg-gray-500 transition-colors duration-300 not-disabled:hover:text-gray-900',
  {
    variants: {
      variant: {
        primary:
          'font-semibold w-full flex items-center justify-between h-12 px-5 rounded-xl',
        icon: 'p-1.5 rounded-md ',
      },
    },
  }
)

export default function Button({
  variant = 'primary',
  className,
  ...rest
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...rest} />
  )
}
