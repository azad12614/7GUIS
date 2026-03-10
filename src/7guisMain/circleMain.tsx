import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CircleApp from '../7guisApp/CircleApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CircleApp />
  </StrictMode>,
)
