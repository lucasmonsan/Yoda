import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/Global.css"
import { RouterController } from './routes/RouterController'
import { AuthGoogleProvider } from "./contexts/AuthGoogleProvider"
import { ThemeProvider } from './contexts/ThemeController'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthGoogleProvider>      
      <ThemeProvider>
        <RouterController />    
      </ThemeProvider>
    </AuthGoogleProvider>
  </React.StrictMode>
)
