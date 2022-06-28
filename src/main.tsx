import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import StoreContextProvider from './context/Store'
import MyLibraryContextProvider from './context/MyLibrary'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyLibraryContextProvider>
        <StoreContextProvider>
          <App />
        </StoreContextProvider>
      </MyLibraryContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
