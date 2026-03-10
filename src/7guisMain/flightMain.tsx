import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FlightApp from '../7guisApp/FlightApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FlightApp />
  </StrictMode>,
)
