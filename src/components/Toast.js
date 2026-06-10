/**
 * Toast Notification Helper
 * Creates a beautiful animated floating toast notification.
 */
export function showToast(message, type = 'success') {
  // Check if container exists, otherwise create it
  let container = document.getElementById('toast-container')
  if (!container) {
    container = document.createElement('div')
    container.id = 'toast-container'
    container.className = 'toast-container'
    document.body.appendChild(container)
  }

  // Create toast element
  const toast = document.createElement('div')
  toast.className = `toast-item ${type}`
  
  // Icon based on type
  const icon = type === 'success' 
    ? '<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>' 
    : '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'

  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-message">${message}</div>
    <button class="toast-close-btn">&times;</button>
  `

  container.appendChild(toast)

  // Trigger animation next frame
  setTimeout(() => {
    toast.classList.add('show')
  }, 10)

  // Auto close function
  const closeToast = () => {
    toast.classList.remove('show')
    toast.classList.add('hide')
    // Wait for slide-out animation to finish
    toast.addEventListener('transitionend', () => {
      toast.remove()
      // If container is empty, remove it
      if (container.children.length === 0) {
        container.remove()
      }
    })
  }

  // Event listener for close button
  toast.querySelector('.toast-close-btn').addEventListener('click', (e) => {
    e.stopPropagation()
    closeToast()
  })

  // Auto remove after 4 seconds
  setTimeout(closeToast, 4000)
}
