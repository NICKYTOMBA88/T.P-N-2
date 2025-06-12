import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


//componentes
import { RouterApp } from './router/routerApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
