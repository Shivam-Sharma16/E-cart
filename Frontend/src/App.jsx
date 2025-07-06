import React, { useEffect } from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux'
import { asyncCurrentUser } from './store/actions/userAction'

const App = () => {

  const dispatch=useDispatch()

useEffect(()=>{
dispatch(asyncCurrentUser())
},[])

  return (
    <div className='bg-gradient-to-br from-[#f3a8b5] via-[#b490d4] to-[#6e8bdf] p-[2rem] w-sceen h-screen'>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App
