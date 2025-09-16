import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import F1 from './F1.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <F1 />
  </StrictMode>,
)
