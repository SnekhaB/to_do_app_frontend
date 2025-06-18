import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
const ToastNotification = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
  )
}

export default ToastNotification

