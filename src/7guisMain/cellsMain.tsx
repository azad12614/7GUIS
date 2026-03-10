import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CellsApp from '../7guisApp/CellsApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CellsApp />
  </StrictMode>,
)
