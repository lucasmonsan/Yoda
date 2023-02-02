import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/Global.css"
import { RouterController } from './routes/RouterController'
import { AuthGoogleProvider } from "./contexts/AuthGoogleProvider"
import { ThemeProvider } from './contexts/ThemeController'
import { SituationProvider } from './contexts/SituationController'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthGoogleProvider>      
      <ThemeProvider>
        <SituationProvider>
          <RouterController />
        </SituationProvider>    
      </ThemeProvider>
    </AuthGoogleProvider>
  </React.StrictMode>
)
