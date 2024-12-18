import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter} from "react-router";
import AppRoutes from './Routers/AppRoutes';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position='top-right' />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  </StrictMode>,
)
