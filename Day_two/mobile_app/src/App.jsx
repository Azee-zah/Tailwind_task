import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MobileMenu from './MobileMenu'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <MobileMenu/>

   </div>
  )
}

export default App
