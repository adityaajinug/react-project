import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeContextProvider } from '@/context/ThemeContext.tsx'
import { AuthContextProvider } from '@/context/AuthContext.tsx'
import { NotifContextProvider } from '@/context/NotifContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <NotifContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </NotifContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
