import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './Router'
import { FirebaseProvider } from './contexts/Context'
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <Router />
    </FirebaseProvider>
  </React.StrictMode>
)
