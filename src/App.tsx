import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Navbar, Carousel } from './components'
import { Dashboard } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
