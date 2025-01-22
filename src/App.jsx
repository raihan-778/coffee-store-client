
import { useLoaderData } from 'react-router-dom'
import './App.css'

function App() {

  const {_id}=useLoaderData()
 

  return (
    <>
      <div>
 
      <h1 className='text-6xl text-purple-700'>Coffee Store</h1>
      </div >
    
    </>
  )
}

export default App
