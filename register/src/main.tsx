import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SpinnerProvider from './context/SpinnerProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SpinnerProvider>
      <App />
    </SpinnerProvider>
  </React.StrictMode>,
)
