import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './web_view/App.jsx'
import MobileApp from './mobile_view/MobileApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MobileApp />
  </StrictMode>,
)
