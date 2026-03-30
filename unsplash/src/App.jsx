import React from 'react'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
      </Routes>


    </>
  )
}

export default App