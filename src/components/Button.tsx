import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const buttonStyles = cva(['transition-colors'], {
  variants: {
    look: {
      default: ['bg-secondary-default', 'hover:bg-secondary-hover'],
      ghost: ['hover:bg-gray-100'],
      dark: ['bg-secondary-dark', 'hover:bg-secondary-dark-hover', 'text-secondary-default']
    },
    size: {
      default: ['rounded', 'p-2'],
      icon: ['rounded-full', 'w-10', 'h-10', 'flex', 'items-center', 'justify-center', 'p-2.5']
    }
  },
  defaultVariants: {
    look: 'default',
    size: 'default'
  }
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'>

const Button = ({ look, size, className, ...props }: ButtonProps) => {
  return <button {...props} className={twMerge(buttonStyles({ look, size }), className)}></button>
}

export default Button
