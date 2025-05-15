
import { createRoot } from 'react-dom/client'
import { init } from '@emailjs/browser';
import App from './App.tsx'
import './index.css'

// Initialize EmailJS with your public key
init("VgLV1u04aP3HwNDN_");

createRoot(document.getElementById("root")!).render(<App />);
