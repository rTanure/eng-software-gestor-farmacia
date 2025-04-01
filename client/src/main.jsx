import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import "./css/reset.css"
import "./css/variables.css"
import "./css/general.css"
import { QueryClient, QueryClientProvider } from 'react-query'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
