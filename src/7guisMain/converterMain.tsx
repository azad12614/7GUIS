import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ConverterApp from '../7guisApp/ConverterApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConverterApp />
  </StrictMode>,
)
