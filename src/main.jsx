import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.jsx'
import './main.css'



const rootElement = document.getElementById('root')

createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);