import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CrudApp from '../7guisApp/CrudApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CrudApp />
  </StrictMode>,
)
