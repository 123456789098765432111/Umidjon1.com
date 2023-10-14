import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import "./index.css"
import "bootstrap/dist/css/bootstrap.css"
import 'rodal/lib/rodal.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
