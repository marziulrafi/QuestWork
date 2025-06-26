import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './provider/AuthProvider.jsx'
import router from './route/routes.jsx'
import { ToastContainer } from 'react-toastify'
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </StrictMode>,
)
