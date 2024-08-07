export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(value)
}

export const showNotification = (setNotification, message) => {
  setNotification(message)
  setTimeout(() => setNotification(''), 3000)
}
