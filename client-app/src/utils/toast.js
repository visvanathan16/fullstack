/**
 * Notification utility for displaying toast messages
 * @param {string} title - The title of the notification
 * @param {string} description - The description text
 * @param {string} status - The status type: 'success', 'error', 'info', or 'warning'
 */
export const showToast = (title, description, status = 'success') => {
  const notificationsContainer = document.getElementById('notifications-container')
  
  if (!notificationsContainer) {
    const container = document.createElement('div')
    container.id = 'notifications-container'
    container.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999;'
    document.body.appendChild(container)
  }

  const toastEl = document.createElement('div')
  const colors = {
    success: '#48bb78',
    error: '#f56565',
    info: '#4299e1',
    warning: '#ed8936',
  }

  toastEl.style.cssText = `
    background: ${colors[status]};
    color: white;
    padding: 16px 24px;
    border-radius: 4px;
    margin-bottom: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    font-weight: 500;
    max-width: 400px;
  `

  toastEl.innerHTML = `
    <div style="font-weight: 600;">${title}</div>
    <div style="font-size: 14px; margin-top: 4px;">${description}</div>
  `

  document.getElementById('notifications-container').appendChild(toastEl)

  setTimeout(() => {
    toastEl.remove()
  }, 3000)
}
