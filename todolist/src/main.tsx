import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DataContext } from './context/DataContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DataContext>
    <App />
    </DataContext>
    
    
  </StrictMode>,
)
