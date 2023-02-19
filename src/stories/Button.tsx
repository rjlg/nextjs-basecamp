import React from 'react'
import './button.css'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}: ButtonProps) => {
  const primaryCx = 'bg-blue-600 dark:bg-red-600'
  const secondaryCx = 'dark:bg-blue-500 bg-red-500'
  const modeCx = primary ? primaryCx : secondaryCx
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, modeCx].join(
        ' ',
      )}
      onClick={onClick}
      style={{ backgroundColor }}
    >
      {label}
    </button>
  )
}

export default Button
