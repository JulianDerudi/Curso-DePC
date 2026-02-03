import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import ThemeContextProvider from './Context/themeContext.jsx' 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
    
  </BrowserRouter>
  
)
