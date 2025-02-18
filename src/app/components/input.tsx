import { cn } from '@/lib/cn'
import type { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  className?: string
  hasError?: boolean
}

interface InputRootProps extends ComponentProps<'div'> {
  className?: string
  hasError?: boolean
}

// Input({ hasError = false, className, ...rest }: InputProps) {
//   return (

// <span className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-not-focus-within:group-data-[error=true]:text-danger">
//   <Mail />
// </span>
// <input className={cn("flex-1 outline-0 placeholder:text-gray-400", className)} {...rest} />
//     </div>
//   );
// }

function InputRoot({ hasError = false, className, ...rest }: InputRootProps) {
  return (
    <div
      data-error={hasError}
      className={cn(
        'group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 not-focus-within:data-[error=true]:border-danger',
        className
      )}
      {...rest}
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> {
  className?: string
}

function InputIcon({ className, ...rest }: InputIconProps) {
  return (
    <span
      className={cn(
        'text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-not-focus-within:group-data-[error=true]:text-danger',
        className
      )}
      {...rest}
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {
  className?: string
}

function InputField({ className, ...rest }: InputFieldProps) {
  return (
    <input
      className={cn('flex-1 outline-0 placeholder:text-gray-400', className)}
      {...rest}
    />
  )
}

export const Input = {
  Root: InputRoot,
  Icon: InputIcon,
  Field: InputField,
}
