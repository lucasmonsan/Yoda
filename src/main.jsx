import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/Global.css"
import { RouterController } from './routes/RouterController'
import { AuthGoogleProvider } from "./contexts/AuthGoogleProvider"
import { ThemeProvider } from './contexts/ThemeController'
import { SituationProvider } from './contexts/SituationController'
import { FirebaseDataProvider } from './contexts/FirebaseDataProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthGoogleProvider>
      <FirebaseDataProvider>  
        <ThemeProvider>
          <SituationProvider>
            <RouterController />
          </SituationProvider>    
        </ThemeProvider>
      </FirebaseDataProvider>
    </AuthGoogleProvider>
  </React.StrictMode>
)
