
import { createRoot } from 'react-dom/client'
import './index.css'

import AppRoute from './AppRoutes/AppRoute.jsx'
import { AuthProvider } from './context/Auth.jsx'
import { ContextProvider } from './context/MyContext.jsx'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <ContextProvider>
        <AppRoute />
      </ContextProvider>
      
    </AuthProvider>
)
