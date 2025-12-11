import React from 'react'

const Button = ({ children, onClick, variant = 'primary', className = '', size = 'md' }) => {
  const baseClass = `btn btn-${variant} btn-${size}`
  return (
    <button className={`${baseClass} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
