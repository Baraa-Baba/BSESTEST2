import { useState } from 'react' 
import '../css/App.css'   
import Buy from './Buy'
import Signin from './SignIn';  
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">  
    <h1 className='main-header'>بيع وأشتري أي شيئ في صيدا</h1>
    <h2 className='second-header'>الإستلام والتسليم علينا</h2>
    <Buy />
    </div>
  )
}

export default App
