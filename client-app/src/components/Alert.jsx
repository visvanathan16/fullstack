import React from 'react'

const Alert = ({ status, message }) => {
  return (
    <div className={`alert alert-${status}`}>
      <AlertIcon type={status} />
      {message}
    </div>
  )
}

const AlertIcon = ({ type = 'info' }) => {
  const icons = {
    error: '❌',
    success: '✅',
    info: 'ℹ️',
    warning: '⚠️',
  }
  return <span style={{ marginRight: '0.5rem' }}>{icons[type] || icons.info}</span>
}

export default Alert
