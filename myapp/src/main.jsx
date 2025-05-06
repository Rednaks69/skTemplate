import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router'
import './index.css'
import App from './pages/App.jsx'
import Login from './pages/Login.jsx'
import Crm from './pages/Crm.jsx'
import CardDetails from './pages/CardDetails.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/api/v1" element={<Crm />} />
        <Route path="/api/v1/cards/:id" element={<CardDetails />} />
      </Routes>
  </BrowserRouter>
  </StrictMode>,
)
