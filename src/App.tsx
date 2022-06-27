import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Navbar } from './components'
import { Dashboard, Search } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
