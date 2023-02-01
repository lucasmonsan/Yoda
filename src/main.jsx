import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/Global.css"
import { RouterController } from './routes/RouterController'
import { AuthGoogleProvider } from "./contexts/AuthGoogleProvider"
import { ThemeProvider } from './contexts/ThemeController'
import { AnimationsProvider } from './contexts/AnimationsController'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthGoogleProvider>      
      <ThemeProvider>
        <AnimationsProvider>
          <RouterController />
        </AnimationsProvider>    
      </ThemeProvider>
    </AuthGoogleProvider>
  </React.StrictMode>
)
