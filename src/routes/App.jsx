import { useState } from 'react' 
import '../css/App.css'   
import Buy from './Buy'
import Signin from './SignIn'; 
import '../messaging_init_in_sw'
import AboutUs from './AboutUs';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">   
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li> 
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route> 
        </Switch>
      </div>
    </Router>
    </div>
    
  )
}

export default App
