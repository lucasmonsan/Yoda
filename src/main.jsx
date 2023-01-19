import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/Global.css"
import { RouterController } from './routes/RouterController'
import { AuthGoogleProvider } from "./contexts/authGoogle"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthGoogleProvider>
      <RouterController />
    </AuthGoogleProvider>
  </React.StrictMode>
)
